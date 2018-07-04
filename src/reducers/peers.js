import {CHECK_PEER_STATUS_START, CHECK_PEER_STATUS_SUCCESS, CHECK_PEER_STATUS_FAILURE} from '../constants/actionTypes';
import initialState from './initialState';

export default function peersReducer(state = initialState().peers, action) {
  let list, peerIndex;
  switch (action.type) {
    case CHECK_PEER_STATUS_START:
      list = state.list;
      peerIndex = state.list.findIndex(p => p.url === action.peer.url);
      if (peerIndex >= 0) {
        list = [
          ...state.list.slice(0, peerIndex),
          {
            ...state.list[peerIndex],
            loading: true
          },
          ...state.list.slice(peerIndex + 1)
        ];
      }
      return {
        ...state,
        list
      };
    case CHECK_PEER_STATUS_SUCCESS:
      list = state.list;
      peerIndex = state.list.findIndex(p => p.url === action.peer.url);
      if (peerIndex >= 0) {
        list = [
          ...state.list.slice(0, peerIndex),
          {
            ...state.list[peerIndex],
            online: true,
            name: action.res.node_name,
            loading: false
          },
          ...state.list.slice(peerIndex + 1)
        ];
      }
      return {
        ...state,
        list
      };
    case CHECK_PEER_STATUS_FAILURE:
      list = state.list;
      peerIndex = state.list.findIndex(p => p.url === action.peer.url);
      if (peerIndex >= 0) {
        list = [
          ...state.list.slice(0, peerIndex),
          {
            ...state.list[peerIndex],
            online: false,
            loading: false
          },
          ...state.list.slice(peerIndex + 1)
        ];
      }
      return {
        ...state,
        list
      };
    default:
      return state;
  }
}
