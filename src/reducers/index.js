import { combineReducers } from 'redux';
// import RiskReducer from './reducer_riskLevel';
import {auth, portfolio, portfolioTotal, portfolioChange} from './reducer_account';
import {nav} from './reducer_nav';
import {risklevel} from './reducer_riskLevel';

const rootReducer = combineReducers({
  portfolioTotal: portfolioTotal,
  risklevel: risklevel,
  nav: nav,
  authenticated: auth,
  portfolio: portfolio,
  portfolioChange: portfolioChange
})

export default rootReducer;
