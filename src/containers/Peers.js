import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/peers';
import Peer from '../components/Peer';

export class Peers extends React.Component {
  componentDidMount() {
    this.props.actions.checkPeerStatuses(this.props.peers.list)
  }

  render() {
    const {peers} = this.props;
    return (
      <div>
        <h1>Peers</h1>
        {peers.list.map(peer => <Peer peer={peer} key={peer.url} />)}
      </div>
    );
  }
}

Peers.propTypes = {
  actions: PropTypes.object.isRequired,
  peers: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    peers: state.peers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Peers);
