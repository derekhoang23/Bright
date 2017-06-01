import { combineReducers } from 'redux';
// import RiskReducer from './reducer_riskLevel';
import {auth, portfolio} from './reducer_account';

const rootReducer = combineReducers({
  authenticated: auth,
  portfolio: portfolio
})

export default rootReducer;
