import { REQUEST_VIDEOS,RECEIVE_VIDEOS,REQUEST_SINGLE_VIDEO,RECEIVE_SINGLE_VIDEO } from './VideoActions';

// Initial State
const initialState = {
  isFetching: false,
  items: [],
  numberOfItems: 0,
  item: {}
};

const VideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_VIDEOS: {
      return Object.assign({},state,{
        isFetching: true,
        numberOfItems: 0,
        items: []
      })
    }
    case RECEIVE_VIDEOS: {
      return Object.assign({},state,{
        isFetching: false,
        items: action.videos.items,
        numberOfItems: action.videos.items.length,
        lastUpdated: action.receiveAt
      })
    }

    case REQUEST_SINGLE_VIDEO: {
      return Object.assign({},state,{
        isFetching: true,
        item: {}
      })
    }

    case RECEIVE_SINGLE_VIDEO: {
      return Object.assign({},state,{
        isFetching: false,
        item: action.video,
        lastUpdated: action.receiveAt
      })
    }
    default:
      return state;
  }
};

/* Selectors */

// Get videos
export const getClans = state => {state.cocapi.items};

// Export Reducer
export default VideoReducer;
