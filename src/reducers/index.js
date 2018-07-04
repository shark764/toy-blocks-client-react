import { combineReducers } from 'redux';
import nodes from './nodes';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  nodes,
  routing: routerReducer
});

export default rootReducer;
