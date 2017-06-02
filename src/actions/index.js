export const INCREASE_RISK = 'increase_risk';
export const FETCH_RISKLEVEL = 'fetch_riskLevel';
export const FETCH_PORTFOLIO = 'fetch_portfolio';
export const ADD_CDS = 'add_cds';
export const IS_AUTH = 'is_intial';
export const NAV_PORTFOLIODETAILS = 'nav_portfoliodetails';
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

export function atPortfolioDetails(navItem) {
  return {
    type: NAV_PORTFOLIODETAILS,
    payload: navItem
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

function fetchRiskLevel(risklevelJson) {
  return {
    type: FETCH_RISKLEVEL,
    risklevel: risklevelJson.risk
  }
}

function fetchPortfolio(portfolioJson) {
  return {
    type: FETCH_PORTFOLIO,
    cds: portfolioJson.cds,
    USBonds: portfolioJson.bonds,
    RealEstate: portfolioJson.realestate,
    USStocks: portfolioJson.stocks,
    HorseBetting: portfolioJson.horsebetting
  }
}

export function loadRiskLevel(userId, json) {
  return (dispatch, getState) => {
    const userData = json.filter(data => {
        return data.id === userId
    })
    dispatch(fetchRiskLevel(userData[0]))
  }
}



export function loadUserPortfolio(userId, json) {
  return (dispatch, getState) => {
    if (getState().authenticated) {
      const userData = json.filter(data => {
          return data.id === userId
      })
      dispatch(fetchPortfolio(userData[0].portfolio));
    } else {
      return Promise.resolve();
    }
  }
}
