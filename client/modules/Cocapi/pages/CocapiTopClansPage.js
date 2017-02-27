/**
 * Created by Admin on 2/23/2017.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Actions
import { getTopClansRequest } from '../../Cocapi/CocapiActions';

// Import Selectors
import { getClans } from '../../Cocapi/CocapiReducer';

class TopClans extends React.Component {
  componentWillMount() {
    // let cocApi = clashApi({
    //   token: apiConfig.token
    // });
    // cocApi
    //   .clans()
    //   .withLimit(2)
    //   .withWarFrequency('always')
    //   .withMinMembers(25)
    //   .fetch()
    //   .then(response => console.log(response))
    //   .catch(err => console.log(err))
  }

  render () {
    return (
      <div className="top-clans">
        <h1>top-clans</h1>
      </div>
    )
  }
  componentDidMount() {
    let options = {
      name: "kho mau"
    }
    this.props.dispatch(getTopClansRequest());
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    clans: getClans(state),
  };
}

TopClans.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    tag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    clanLevel: PropTypes.number.isRequired,
    members: PropTypes.number.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

TopClans.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(TopClans);
