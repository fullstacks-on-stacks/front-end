import { getBars } from '../services/barsApi';

export const FETCH_BARS = 'FETCH_BARS';
export const fetchBars = () => dispatch => {
  return getBars()
    .then(bars => {
      dispatch({
        type: FETCH_BARS,
        payload: bars
      });
    });
};
