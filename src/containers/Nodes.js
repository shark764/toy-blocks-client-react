import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/nodes';
import Node from '../components/Node';

export class Nodes extends React.Component {
  componentDidMount() {
    this.props.actions.checkNodeStatuses(this.props.nodes.list)
  }

  render() {
    const {nodes} = this.props;
    return (
      <div>
        <h1>Nodes</h1>
        {nodes.list.map(node => <Node node={node} key={node.url} />)}
      </div>
    );
  }
}

Nodes.propTypes = {
  actions: PropTypes.object.isRequired,
  nodes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    nodes: state.nodes
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
)(Nodes);
