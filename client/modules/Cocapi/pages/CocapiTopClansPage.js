/**
 * Created by Admin on 2/23/2017.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Actions
import { fetchTopClans,fetchClansIfNeeded } from '../../Cocapi/CocapiActions';

// Import Selectors
import { getClans } from '../../Cocapi/CocapiReducer';

// Import Components
import ClanItem from '../components/ClanItem'

class TopClans extends React.Component {
  constructor(props,context) {
    super(props,context)
  }
  componentWillMount() {

  }
  componentDidMount() {
    let options = {
      name: "kho mau",
      limit: 2
    }
    this.props.dispatch(fetchClansIfNeeded(options));
  }
  componentDidUpdate(prevProps) {
    // if (this.props.isFetching !== prevProps.isFetching) {
    //    const { dispatch } = this.props
    //    dispatch(fetchClansIfNeeded())
    // }
  }
  render () {
    const { items } = this.props
    return (
      <div className="top-clans">
        <h1>Top-clans</h1>
        {items.map((item, i) =>
            <ClanItem key={i} item={item}/>
          )
        }
      </div>
    )
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    isFetching: state.cocapi.isFetching,
    lastUpdated: state.cocapi.lastUpdated,
    items: state.cocapi.items,
  };
}

TopClans.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

TopClans.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(TopClans);
