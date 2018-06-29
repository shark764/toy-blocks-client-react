import { combineReducers } from 'redux';
import peers from './peers';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  peers,
  routing: routerReducer
});

export default rootReducer;
