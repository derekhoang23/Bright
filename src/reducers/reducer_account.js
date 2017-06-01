import {FETCH_PORTFOLIO, IS_AUTH} from '../actions'

export function auth(state = false, action) {
  switch (action.type) {
    case IS_AUTH:
      return action.payload;
    default:
      return state;
  }
}

export function portfolio(state = {}, action) {
  console.log('wtf is this', action)
  switch (action.type) {
    case FETCH_PORTFOLIO:
      return {...state, total: action.total, cds: action.cds, bonds: action.USBonds, realestate: action.RealEstate, stocks: action.USStocks, HorseBetting: action.HorseBetting};
    default:
      return state;
  }
}
