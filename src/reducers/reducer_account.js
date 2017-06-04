import {FETCH_PORTFOLIO, IS_AUTH, FETCH_PORTFOLIO_TOTAL, LOW_RISK, MEDIUM_RISK, HIGH_RISK, UPDATE_PORTFOLIO } from '../actions';
import Immutable from 'immutable';

export function auth(state = false, action) {
  switch (action.type) {
    case IS_AUTH:
      return action.payload;
    default:
      return state;
  }
}

export function portfolio(state = {}, action) {
  switch (action.type) {
    case FETCH_PORTFOLIO:
      return {...state, cds: action.cds, bonds: action.USBonds, realestate: action.RealEstate, stocks: action.USStocks, HorseBetting: action.HorseBetting};
    case UPDATE_PORTFOLIO:
      return {...state, cds: action.cds, bonds: action.USBonds, realestate: action.RealEstate, stocks: action.USStocks, HorseBetting: action.HorseBetting};
    default:
      return state;
  }
}

export function portfolioChange(state = {}, action) {
  switch(action.type) {
    case FETCH_PORTFOLIO:
      return {...state, cds: action.cds, bonds: action.USBonds, realestate: action.RealEstate, stocks: action.USStocks, HorseBetting: action.HorseBetting};
      case LOW_RISK:
        // const map1 = Immutable.Map(...state);
        return {...state, cds: action.cds, bonds: action.USBonds, realestate: action.RealEstate, stocks: action.USStocks, HorseBetting: action.HorseBetting};
      case MEDIUM_RISK:
        return {...state, cds: action.cds, bonds: action.USBonds, realestate: action.RealEstate, stocks: action.USStocks, HorseBetting: action.HorseBetting};
      case HIGH_RISK:
        return {...state, cds: action.cds, bonds: action.USBonds, realestate: action.RealEstate, stocks: action.USStocks, HorseBetting: action.HorseBetting};
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
