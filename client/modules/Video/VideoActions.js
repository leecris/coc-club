/**
 * Created by Admin on 2/24/2017.
 */
import callYTApi from '../../util/youtubeApiCaller'

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS'
export const REQUEST_VIDEOS = 'REQUEST_VIDEOS'
export const REQUEST_SINGLE_VIDEO = 'REQUEST_SINGLE_VIDEO'
export const RECEIVE_SINGLE_VIDEO = 'RECEIVE_SINGLE_VIDEO'

//Export Actions
export function requestVideosFromAPI() {
  return {
    type: REQUEST_VIDEOS,
  }
}
export function receiveVideosFromAPI(videos) {
  return {
    type: RECEIVE_VIDEOS,
    videos,
    receiveAt: Date.now()
  }
}

export function requestSingleVideoFromAPI() {
  return {
    type: REQUEST_SINGLE_VIDEO,
  }
}

export function receiveSingleVideoFromAPI(video) {
  return {
    type: RECEIVE_SINGLE_VIDEO,
    video,
    receiveAt: Date.now()
  }
}

export function fetchVideos(options={}) {
  return (dispatch) => {
    dispatch(requestVideosFromAPI())
    return callYTApi('videos', options).then(res => {
      dispatch(receiveVideosFromAPI(res))
    });
  };
}

function shouldFetchVideos(state) {
  const Videos = state.cocapi.Videos
  if (!Videos) {
    return true
  } else if (Videos.isFetching) {
    return false
  } else {
    return true
  }
}

export function fetchVideosIfNeeded(options={}) {
  return (dispatch, getState) => {
    if (shouldFetchVideos(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchVideos(options))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}


export function fetchSingleVideo(options={}) {
  return (dispatch) => {
    dispatch(requestSingleVideoFromAPI())
    return callYTApi('video-detail', options).then(res => {
      dispatch(receiveSingleVideoFromAPI(res.response))
    });
  };
}

function shouldFetchSingleVideo(state) {
  const video = state.cocapi.video
  if (!video) {
    return true
  } else if (video.isFetching) {
    return false
  } else {
    return true
  }
}

export function fetchSingleVideoIfNeeded(videoID) {
  return (dispatch, getState) => {
    if (shouldFetchSingleVideo(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchSingleVideo({id:videoID}))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}
