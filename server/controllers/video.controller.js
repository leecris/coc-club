import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';
import Youtube from 'youtube-node'
import clientConfig from '../../client/config'
/**
 * Get top clans from api
 * @param req
 * @param res
 * @returns void
 */
export function getVideosFromAPI(req, res) {
  let youTube = new Youtube();
  youTube.setKey(clientConfig.youtubeAPI.token);
  let cat = req.query.category
  youTube.search('Clash of Clan TH10 '+cat, 10, function (error, result) {
    if (error) {
      console.log(error);
    }
    else {
      let searchItems = result.items;
      let items = [];
      // Generate youtube embedded link
      for (let i = 0; i < searchItems.length; i++) {
        let videoID = searchItems[i].id.videoId,
          videoURL = 'https://www.youtube.com/embed/' + videoID,
          title = searchItems[i].snippet.title,
          description = searchItems[i].snippet.description,
          thumbnail = searchItems[i].snippet.thumbnails.high.url;

        items[i] = {
          id: videoID,
          title: title,
          description: description,
          videoURL: videoURL,
          thumbnail: thumbnail
        }
      }
      res.json({items})
    }
  });
}

/**
 * Get clan detail by tag
 * @param req
 * @param res
 */
export function getVideoByID(req,res) {
  let tag = req.param('tag')
  console.log(tag);
  cocApi.clanByTag(tag)
    .then(response => {
      res.json({ response })
    }).catch(err => console.log(err))
}
