export const INCREASE_RISK = 'increase_risk';
export const FETCH_RISKLEVEL = 'fetch_riskLevel';
export const FETCH_PORTFOLIO = 'fetch_portfolio';
export const ADD_CDS = 'add_cds';
export const IS_AUTH = 'is_intial';
import _ from 'lodash';

export function increaseRisk() {
  return {
    type: INCREASE_RISK
  };
}

function authenticated(authState) {
  return {
    type: IS_AUTH,
    payload: !authState
  }
}



export function authIn() {
  return (dispatch, getState) => {
    if (!getState.authenticated) {
      return dispatch(authenticated(getState.authenticated))
    } else {
      return Promise.resolve();
    }
  }
}

export function addCds(action) {
  return {
    type: ADD_CDS,
    payload: action.payload
  }
}

export function fetchRiskLevel() {
  return {
    type: FETCH_RISKLEVEL
  }
}

function fetchPortfolio(portfolioJson) {
  return {
    type: FETCH_PORTFOLIO,
    total: portfolioJson.total,
    cds: portfolioJson.cds,
    USBonds: portfolioJson.bonds,
    RealEstate: portfolioJson.realestate,
    USStocks: portfolioJson.stocks,
    HorseBetting: portfolioJson.horsebetting
  }
}



export function loadUserPortfolio(userId, json) {
  return (dispatch, getState) => {
    if (getState().authenticated) {
      console.log('id', userId);
      console.log('data', json)
      const userData = json.filter(data => {
          return data.id === userId
      })
      console.log('userda', userData[0])
      dispatch(fetchPortfolio(userData[0].portfolio));
    } else {
      return Promise.resolve();
    }
  }
}
