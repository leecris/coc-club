import fetch from 'isomorphic-fetch';
import clientConfig from '../config';
import axios from 'axios'
export const COC_API_URL = clientConfig.cocapi.url
export const COC_API_TOKEN = clientConfig.cocapi.token

export default function callCocApi(endpoint, options= {}, body) {
  options = {
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer '+COC_API_TOKEN
    },
    body: JSON.stringify(body),
    params: {...options}
  }
  let url = `${COC_API_URL}/${endpoint}`
  // if (options.queryParams) {
  //   url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(options.queryParams);
  //   delete options.queryParams;
  // }
  console.log(url);
  console.log(options);

  return axios.get(url, {
    headers: {
      'Accept': 'application/json',
      'authorization': 'Bearer '+COC_API_TOKEN
    },
    params: {
      name: 'kho mau',
    }
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
