import {INCREASE_RISK, FETCH_RISKLEVEL, CHANGE_RISK} from '../actions';

export function risklevel(state = '', action) {
  switch(action.type) {
    // case INCREASE_RISK:
    //   return state.risklevel + action.increaseRisk;
    case FETCH_RISKLEVEL:
      return action.risklevel;
    case CHANGE_RISK:
      return action.payload;
      default:
        return state;
  }
}
