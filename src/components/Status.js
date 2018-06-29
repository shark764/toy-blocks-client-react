import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import colors from '../constants/colors';

const Wrapper = styled.div`
  border: 2px solid ${props => colors[props.color]};
  border-radius: 2px;
  padding: 0 4px;
  color: ${props => colors[props.color]};
  font-size: 12px;
  font-weight: 500;
  min-width: 38px;
  text-align: center;
`;

// const rotate360 = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const Loading = styled.div`
//   display: inline-block;
//   width: 32px;
//   height: 32px;
//   &:after {
//     content: " ";
//     display: block;
//     width: 23px;
//     height: 23px;
//     margin: 1px;
//     border-radius: 50%;
//     border: 4px solid ${colors.warning};
//     border-color: ${colors.warning} transparent ${colors.warning} transparent;
//     animation: ${rotate360} 1.2s linear infinite;
//   }
// `;

const ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(9px, 0);
  }
`;

const ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const LoadingEllipsis = styled.div`
  position: relative;
  width: 38px;
  height: 19px;

  & div {
    position: absolute;
    top: 7px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${colors.warning};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & div:nth-child(1) {
    left: 6px;
    animation: ${ellipsis1} 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 6px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 16px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 25px;
    animation: ${ellipsis3} 0.6s infinite;
  }
`;

const Status =({loading, online}) => {
  if (loading) {
    return (
      <Wrapper color={'warning'}>
        <LoadingEllipsis>
          <div/><div/><div/><div/>
        </LoadingEllipsis>
      </Wrapper>
    );
  }
  return (
    <Wrapper color={online ? 'success' : 'danger'}>
      {online ? 'Online' : 'Offline'}
    </Wrapper>
  );
};

Status.propTypes = {
  online: PropTypes.bool,
  loading: PropTypes.bool
};

export default Status;
