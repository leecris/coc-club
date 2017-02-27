import { GET_TOP_CLANS } from './CocapiActions';

// Initial State
const initialState = { data: [] };

const CocapiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_CLANS :
      return {
        data: action.clans,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getClans = state => state.posts.data;

// Get post by cuid
export const getClan = (state, name) => state.posts.data.filter(clan => clan.name === name)[0];

// Export Reducer
export default CocapiReducer;
