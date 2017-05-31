export const INCREASE_RISK = 'increase_risk';
export const FETCH_RISKLEVEL = 'fetch_riskLevel';

export function increaseRisk() {
  return {
    type: INCREASE_RISK
  };
}

export function fetchRiskLevel() {
  return {
    type: FETCH_RISKLEVEL
  }
}
