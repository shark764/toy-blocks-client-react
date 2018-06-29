import React from 'react';
import {peer} from '../types';
import styled from 'styled-components';
import colors from '../constants/colors';
import Status from './Status';

const Wrapper = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #aaaaaa;
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

const Peer = ({peer}) => (
  <Wrapper>
    <Head>
      <Name>
        {peer.name || 'Unknown'}
      </Name>
    </Head>
    <Body>
      <URL>
        {peer.url}
      </URL>
      <Status {...peer} />
    </Body>
  </Wrapper>
);

Peer.propTypes = {
  peer: peer.isRequired
};

export default Peer;
