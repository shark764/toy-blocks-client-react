import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../constants/colors';
import Status from './Status';

const Wrapper = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid ${colors.border};
  background: ${colors.contentBackground};
  border-radius: 5px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.div`
  margin-bottom: 6px;
  color: ${colors.primary};
  font-size: 16px;
  font-weight: 700;
`;

const URL = styled.div`
  margin-top: 2px;
  margin-bottom: 2px;
  color: ${colors.faded};
  font-weight: 500;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: right;
`;

const Expander = styled.button`
  margin-left: 10px;
  margin-top: 7px;
 
  background: none;
  border: none;
  position: relative;
  
  cursor: pointer;
  outline: none;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-${props => props.expanded ? 'top' : 'bottom'}: 7px solid ${colors.text};
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
  }
`;

const BlocksWrapper = styled.div`
  margin: 20px 0;
  text-align: center;
  color: ${colors.danger};
  font-weight: 700;
`;

const Node = ({node, expanded, toggleNodeExpanded}) => (
  <Wrapper>
    <Head>
      <Name>
        {node.name || 'Unknown'}
      </Name>
      <Toolbar>
        <Status {...node} />
        <Expander expanded={expanded} onClick={() => toggleNodeExpanded(node)}/>
      </Toolbar>
    </Head>
    <Body>
      <URL>
        {node.url}
      </URL>
    </Body>
    {expanded && (
      <BlocksWrapper>
        Blocks go here
      </BlocksWrapper>
    )}
  </Wrapper>
);

Node.propTypes = {
  node: PropTypes.shape({
    url: PropTypes.string,
    online: PropTypes.bool,
    name: PropTypes.string,
    loading: PropTypes.bool
  }).isRequired,
  expanded: PropTypes.bool,
  toggleNodeExpanded: PropTypes.func.isRequired
};

export default Node;
