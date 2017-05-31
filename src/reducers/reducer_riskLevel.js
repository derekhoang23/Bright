const INITIAL_STATE = {risklevel: 1};
import {INCREASE_RISK} from '../actions';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case INCREASE_RISK:
      return {...state, risklevel: action.payload}
      default:
        return state;
  }
}
