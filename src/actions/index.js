export const INCREASE_RISK = 'increase_risk';

export function increaseRisk(level) {
  return {
    type: INCREASE_RISK,
    payload: level
  };
}
