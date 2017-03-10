import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';
import clashApi from 'clash-of-clans-api'
import clientConfig from '../../client/config'
const COC_API_URL = clientConfig.cocapi.url
const COC_API_TOKEN = clientConfig.cocapi.token
const cocApi = clashApi({
  token: COC_API_TOKEN
});
/**
 * Get top clans from api
 * @param req
 * @param res
 * @returns void
 */
export function getTopClansFromAPI(req, res) {
  cocApi
    .clans()
    .withMinClanLevel(15)
    .withLimit(10)
    .fetch()
    .then(response => { res.json({ response });})
    .catch(err => console.log(err))
}

/**
 * Get clan detail by tag
 * @param req
 * @param res
 */
export function getClanByTag(req,res) {
  let tag = req.param('tag')
  console.log(tag);
  cocApi.clanByTag(tag)
    .then(response => {
      res.json({ response })
  }).catch(err => console.log(err))
}
/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deletePost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}
