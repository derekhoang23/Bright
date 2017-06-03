export const INCREASE_RISK = 'increase_risk';
export const FETCH_RISKLEVEL = 'fetch_riskLevel';
export const FETCH_PORTFOLIO = 'fetch_portfolio';
export const ADD_CDS = 'add_cds';
export const IS_AUTH = 'is_intial';
export const NAV_PORTFOLIODETAILS = 'nav_portfoliodetails';
export const CHANGE_RISK ='change_risk';
export const LOW_RISK = 'low_risk';
export const MEDIUM_RISK = 'medium_risk';
export const HIGH_RISK = 'high_risk';
export const FETCH_PORTFOLIO_TOTAL = 'fetch_portfolio_total';
import _ from 'lodash';

export function increaseRisk() {
  return {
    type: INCREASE_RISK
  };
}

export function changeRisk(level) {
  return {
    type: CHANGE_RISK,
    payload: level
  }
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



export function loadRiskLevel(userId, json) {
  return (dispatch, getState) => {
    const userData = json.filter(data => {
        return data.id === userId
    })
    dispatch(fetchRiskLevel(userData[0]))
  }
}

export function calculateRisk(level) {
  return (dispatch, getState) => {
    if (level < 4 && level > 0) {
      dispatch(lowRisk(level, getState().portfolioTotal));
    } else if (level > 4 && 8 > level) {
      dispatch(mediumRisk(level, getState().portfolioTotal))
    }
    else if (level > 7) {
      dispatch(highRisk(level, getState().portfolioTotal));
    } else {
      Promise.resolve();
    }
  }
}

function lowRisk(level, total) {
  // 500,000
  let sum = 0
  const horse = total * .10; // 50,000
  total -= horse;
  sum += horse;
  const stocks = (total * .20) - horse; // 440,000
  total -= stocks;
  sum += stocks;
  const estate = (total * .30) - stocks;
  total -= estate;
  sum += estate;
  const bonds = (total * .40)- estate
  total -= bonds;
  sum += bonds;
  const cds = total;
  total -= cds;
  sum += cds;
  // horsebetting: total x .10
  // usstocks: total - hoursebetting x .20
  // realestate: total - usstocks x .30
  // usbonds: total - realestate x .40
  // cds: total - usbonds
  if (sum - total === sum) {
    console.log('is this true')
    return {
      type: LOW_RISK,
      cds: cds,
      USBonds: bonds,
      RealEstate: estate,
      USStocks: stocks,
      HorseBetting: horse,
    }
  }
}

function mediumRisk(level, total) {
    return {
      type: MEDIUM_RISK,
      cds: total * .20,
      USBonds: total * .20,
      RealEstate: total * .20,
      USStocks: total * .20,
      HorseBetting: total * .20,
    }
}

function highRisk(level, total) {
    let sum = 0
    const horse = total * .40; // 50,000
    total -= horse;
    sum += horse;
    const stocks = (total * .30) // 440,000
    total -= stocks;
    sum += stocks;
    const estate = (total * .20);
    total -= estate;
    sum += estate;
    const bonds = (total * .10)
    total -= bonds;
    sum += bonds;
    const cds = total;
    total -= cds;
    sum += cds;
    console.log('sum', sum, 'others', horse, stocks, estate, bonds, cds);
    // horsebetting: total x .10
    // usstocks: total - hoursebetting x .20
    // realestate: total - usstocks x .30
    // usbonds: total - realestate x .40
    // cds: total - usbonds
    if (sum - total === sum) {
      console.log('is this true high risk')
      return {
        type: HIGH_RISK,
        cds: cds,
        USBonds: bonds,
        RealEstate: estate,
        USStocks: stocks,
        HorseBetting: horse,
      }
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

function loadPortfolioTotal(total) {
  return {
    type: FETCH_PORTFOLIO_TOTAL,
    payload: total
  }
}

export function fetchPortfolioTotal(total) {
  return (dispatch) => {
    dispatch(loadPortfolioTotal(total))
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
      Promise.resolve();
    }
  }
}
