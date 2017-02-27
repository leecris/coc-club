/**
 * Created by Admin on 2/24/2017.
 */
import callCocApi from '../../util/cocApiCaller'
export const GET_TOP_CLANS = 'GET_TOP_CLANS'

//Export Actions

export function getTopClans(clans) {
  return {
    type: GET_TOP_CLANS,
    clans,
  };
}

export function getTopClansRequest() {
  return (dispatch) => {
    let options = {
      name: "kho mau",
      limit: 2
    }
    return callCocApi('clans', options).then(res => dispatch(getTopClans(res.clans)));
  };
}
