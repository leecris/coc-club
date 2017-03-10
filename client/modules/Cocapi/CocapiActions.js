/**
 * Created by Admin on 2/24/2017.
 */
import callCocApi from '../../util/cocApiCaller'
export const GET_TOP_CLANS = 'GET_TOP_CLANS'
export const RECEIVE_TOP_CLANS = 'RECEIVE_TOP_CLANS'
export const REQUEST_TOP_CLANS = 'REQUEST_TOP_CLANS'
export const REQUEST_SINGLE_CLAN = 'REQUEST_SINGLE_CLAN'
export const RECEIVE_SINGLE_CLAN = 'RECEIVE_SINGLE_CLAN'
//Export Actions

export function getTopClans(clans) {
  return {
    type: GET_TOP_CLANS,
    clans,
  };
}

export function requestTopClansFromAPI() {
  return {
    type: REQUEST_TOP_CLANS,
  }
}
export function receiveTopClansFromAPI(clans) {
  return {
    type: RECEIVE_TOP_CLANS,
    clans,
    receiveAt: Date.now()
  }
}

export function requestSingleClanFromAPI() {
  return {
    type: REQUEST_SINGLE_CLAN,
  }
}

export function receiveSingleClanFromAPI(clan) {
  return {
    type: RECEIVE_SINGLE_CLAN,
    clan,
    receiveAt: Date.now()
  }
}

export function fetchTopClans(options={}) {
  return (dispatch) => {
    dispatch(requestTopClansFromAPI())
    return callCocApi('top-clans', options).then(res => {
        dispatch(receiveTopClansFromAPI(res.response))
    });
  };
}

function shouldFetchClans(state) {
  const clans = state.cocapi.clans
  if (!clans) {
    return true
  } else if (clans.isFetching) {
    return false
  } else {
    return true
  }
}

export function fetchClansIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchClans(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchTopClans())
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}


export function fetchSingleClan(options={}) {
  return (dispatch) => {
    dispatch(requestSingleClanFromAPI())
    return callCocApi('clan-detail', options).then(res => {
      dispatch(receiveSingleClanFromAPI(res.response))
    });
  };
}

function shouldFetchSingleClan(state) {
  const clan = state.cocapi.clan
  if (!clan) {
    return true
  } else if (clan.isFetching) {
    return false
  } else {
    return true
  }
}

export function fetchSingleClansIfNeeded(tag) {
  return (dispatch, getState) => {
    if (shouldFetchSingleClan(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchSingleClan({tag:tag}))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}
