import fetch from 'cross-fetch';
import * as types from '../constants/actionTypes';

const checkPeerStatusStart = (peer) => {
  return {
    type: types.CHECK_PEER_STATUS_START,
    peer
  };
};

const checkPeerStatusSuccess = (peer, res) => {
  return {
    type: types.CHECK_PEER_STATUS_SUCCESS,
    peer,
    res
  };
};

const checkPeerStatusFailure = peer => {
  return {
    type: types.CHECK_PEER_STATUS_FAILURE,
    peer,
  };
};

export function checkPeerStatus(peer) {
  return async (dispatch) => {
    try {
      dispatch(checkPeerStatusStart(peer));
      const res = await fetch(`${peer.url}/api/v1/status`);

      if(res.status >= 400) {
        dispatch(checkPeerStatusFailure(peer));
      }

      const json = await res.json();

      dispatch(checkPeerStatusSuccess(peer, json));
    } catch (err) {
      dispatch(checkPeerStatusFailure(peer));
    }
  };
}

export function checkPeerStatuses(list) {
  return (dispatch) => {
    list.forEach(peer => {
      dispatch(checkPeerStatus(peer));
    });
  };
}
