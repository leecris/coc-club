import fetch from 'isomorphic-fetch';
import clientConfig from '../config';
import serverConfig from '../../server/config'
import axios from 'axios'
export const COC_API_URL = clientConfig.cocapi.url
export const COC_API_TOKEN = clientConfig.cocapi.token
export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
  process.env.BASE_URL || (`http://localhost:${process.env.PORT || serverConfig.port}/cocapi`) :
  '/cocapi';

export default function callCocApi(endpoint, options= {}, body) {
  // options = {
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  //     'Accept': 'application/json',
  //     'Authorization': 'Bearer '+COC_API_TOKEN
  //   },
  //   body: JSON.stringify(body),
  //   params: {...options}
  // }
  let url = `${API_URL}/${endpoint}`
  if (options) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(options);
  }
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
