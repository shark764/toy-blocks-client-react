import * as ActionTypes from '../constants/actionTypes';
import reducer from './peers';
import initialState from './initialState';


describe('Reducers::Peers', () => {
  const getInitialState = () => {
    return initialState().peers;
  };

  const peerA = {
    url: 'http://localhost:3002',
    online: false,
    name: null
  };

  const peerB = {
    url: 'http://localhost:3003',
    online: false,
    name: null
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle CHECK_PEER_STATUS_START', () => {
    const appState = {
      list: [peerA, peerB]
    };
    const action = { type: ActionTypes.CHECK_PEER_STATUS_START, peer: peerA };
    const expected = {
      list: [
        {
          ...peerA,
          loading: true
        },
        peerB
      ]
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle CHECK_PEER_STATUS_SUCCESS', () => {
    const appState = {
      list: [peerA, peerB]
    };
    const action = { type: ActionTypes.CHECK_PEER_STATUS_SUCCESS, peer: peerA, res: {node_name: 'alpha'} };
    const expected = {
      list: [
        {
          ...peerA,
          online: true,
          name: 'alpha',
          loading: false
        },
        peerB
      ]
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it('should handle CHECK_PEER_STATUS_FAILURE', () => {
    const appState = {
      list: [
        {
          ...peerA,
          online: true,
          name: 'alpha',
          loading: false
        },
        peerB
      ]
    };
    const action = { type: ActionTypes.CHECK_PEER_STATUS_FAILURE, peer: peerA };
    const expected = {
      list: [
        {
          ...peerA,
          online: false,
          name: 'alpha',
          loading: false
        },
        peerB
      ]
    };

    expect(reducer(appState, action)).toEqual(expected);
  });
});
