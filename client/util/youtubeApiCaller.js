import fetch from 'isomorphic-fetch';

// Import config
import serverConfig from '../../server/config'

export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
  process.env.BASE_URL || (`http://localhost:${process.env.PORT || serverConfig.port}/videoapi`) :
  '/videoapi';

export default function callYTApi(endpoint, options= {}, body) {
  let url = `${API_URL}/${endpoint}`
  if (options) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(options);
  }
  console.log(url);
  return fetch(url, {
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
    .then(
      response => response,
      error => error
    );
}

function queryParams(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}
