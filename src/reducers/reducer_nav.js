import { NAV_PORTFOLIODETAILS } from '../actions';
import {Link} from 'react-router-dom';

export function nav(state = ["Home", "Portfolio Details", "Log Out", "User"], action) {
  let newArray = state.slice();
  switch(action.type) {
    case NAV_PORTFOLIODETAILS:
      // newArray.splice(newArray.indexOf(action.item), 1);
      return newArray;
      default:
      return newArray;
    }

}
