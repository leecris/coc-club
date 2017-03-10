/**
 * Created by Admin on 2/28/2017.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Actions
import { fetchSingleClan,fetchSingleClansIfNeeded } from '../../Cocapi/CocapiActions';

// Import Selectors
import { getClanDetail } from '../../Cocapi/CocapiReducer';

// Import Components

class ClanDetailPage extends React.Component {
  constructor(props,context) {
    super(props,context)
  }
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
  componentDidMount() {
    this.props.dispatch(fetchSingleClansIfNeeded(this.props.params.tag));
  }
  componentDidUpdate(prevProps) {
    // if (this.props.isFetching !== prevProps.isFetching) {
    //    const { dispatch } = this.props
    //    dispatch(fetchClansIfNeeded())
    // }
  }
  render () {
    const { item } = this.props
    return (
      <div className="clan-detail">
        <pre className="json">
          <code>
            {JSON.stringify(item,null,2)}
          </code>
        </pre>
      </div>
    )
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    isFetching: state.cocapi.isFetching,
    lastUpdated: state.cocapi.lastUpdated,
    item: state.cocapi.item,
  };
}

ClanDetailPage.propTypes = {
  item: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

ClanDetailPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ClanDetailPage);
