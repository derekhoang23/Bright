import {FETCH_PORTFOLIO, IS_AUTH, FETCH_PORTFOLIO_TOTAL, LOW_RISK} from '../actions';

//TODO: import all level risk and update portfolio account with new values

export function auth(state = false, action) {
  switch (action.type) {
    case IS_AUTH:
      return action.payload;
    default:
      return state;
  }
}

export function portfolio(state = {}, action) {
  console.log('action', action);
  switch (action.type) {
    case FETCH_PORTFOLIO:
      return {...state, cds: action.cds, bonds: action.USBonds, realestate: action.RealEstate, stocks: action.USStocks, HorseBetting: action.HorseBetting}
      //TODO: use immutable for nested objects 
    // case LOW_RISK:
    //   console.log('action', action)
      // return {...state, cds: action.cds, bonds: action.USBonds, realestate: action.RealEstate, stocks: action.USStocks, HorseBetting: action.HorseBetting}
    default:
      return state;
  }
}

export function portfolioTotal(state = '', action) {
  switch (action.type) {
    case FETCH_PORTFOLIO_TOTAL:
    return action.payload;
  default:
    return state;
  }
}
