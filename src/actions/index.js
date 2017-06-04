// These const Action Types should be moved to different file

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
export const UPDATE_PORTFOLIO = 'update_portfolio';
export const FETCH_PORTFOLIO_TOTAL = 'fetch_portfolio_total';
import _ from 'lodash';

// Group these action creaters to different file according to which
// state they are updating.

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
  const horse = total * .35;
  const stocks = total * .25;
  const estate = total * .20;
  const bonds = total * .15;
  const cds = total * .05;

    return {
      type: LOW_RISK,
      cds: cds,
      USBonds: bonds,
      RealEstate: estate,
      USStocks: stocks,
      HorseBetting: horse,
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
    const horse = total * .35;
    const stocks = (total * .25);
    const estate = (total * .20);
    const bonds = (total * .15);
    const cds = total * .05;

      return {
        type: HIGH_RISK,
        cds: cds,
        USBonds: bonds,
        RealEstate: estate,
        USStocks: stocks,
        HorseBetting: horse,
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

function upDatingPortfolio(newPortfolio) {
  return {
    type: UPDATE_PORTFOLIO,
    cds: newPortfolio.cds,
    USBonds: newPortfolio.bonds,
    RealEstate: newPortfolio.realestate,
    USStocks: newPortfolio.stocks,
    HorseBetting: newPortfolio.horsebetting
  }
}

export function updatePortfolio(newPortfolio) {
  // need to update json here or home component will still recevie
  // data from json, in reality this needs to be sent to server to
  // update DB
  return (dispatch, setState) => {
    if (setState().portfolio !== newPortfolio) {
      dispatch(upDatingPortfolio(newPortfolio))
    }
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
