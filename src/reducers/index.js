import { combineReducers } from 'redux';
// import RiskReducer from './reducer_riskLevel';
import {auth, portfolio} from './reducer_account';
import {nav} from './reducer_nav';
import {risklevel} from './reducer_riskLevel';

const rootReducer = combineReducers({
  risklevel: risklevel,
  nav: nav,
  authenticated: auth,
  portfolio: portfolio
})

export default rootReducer;
