import { GET_TOP_CLANS,REQUEST_TOP_CLANS,RECEIVE_TOP_CLANS,REQUEST_SINGLE_CLAN,RECEIVE_SINGLE_CLAN } from './CocapiActions';

// Initial State
const initialState = {
  isFetching: false,
  items: [],
  item: {}
};

const CocapiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_CLANS :
      return {
        data: action.clans.items,
      };
    case REQUEST_TOP_CLANS: {
      return Object.assign({},state,{
        isFetching: true
      })
    }
    case RECEIVE_TOP_CLANS: {
      return Object.assign({},state,{
        isFetching: false,
        items: action.clans.items,
        lastUpdated: action.receiveAt
      })
    }

    case REQUEST_SINGLE_CLAN: {
      return Object.assign({},state,{
        isFetching: true,
        item: {}
      })
    }

    case RECEIVE_SINGLE_CLAN: {
      return Object.assign({},state,{
        isFetching: false,
        item: action.clan,
        lastUpdated: action.receiveAt
      })
    }
    default:
      return state;
  }
};

/* Selectors */

// Get clans
export const getClans = state => {state.cocapi.items};

// Export Reducer
export default CocapiReducer;
