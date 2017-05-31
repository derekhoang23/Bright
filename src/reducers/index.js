import { combineReducers } from 'redux';
import RiskReducer from './reducer_riskLevel';

const rootReducer = combineReducers({
  riskLevel: RiskReducer
})

export default rootReducer;
