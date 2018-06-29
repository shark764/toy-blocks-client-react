import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './peers';

describe('Actions', () => {
  beforeAll(() => {});
  afterAll(() => {});

  const peer = {
    url: 'http://localhost:3002',
    online: false,
    name: null
  };

  // it('should create an action to start checking peer status', () => {
  //   const actual = ActionCreators.checkPeerStatusStart(peer);
  //   const expected = {
  //     type: ActionTypes.CHECK_PEER_STATUS_START,
  //     peer
  //   };
  //
  //   expect(actual).toEqual(expected);
  // });

  it('should create an action to save fuel savings', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.CHECK_PEER_STATUS_START,
      peer
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.checkPeerStatus(peer))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.checkPeerStatus(peer)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });


});
