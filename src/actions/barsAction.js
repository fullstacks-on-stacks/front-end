import { getBars, createBar } from '../services/barsApi';

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

export const ADD_BAR = 'ADD_BAR';
export const addBar = (bar) => dispatch => {
  return createBar(bar)
    .then(bar => {
      dispatch({
        type: ADD_BAR,
        payload: bar
      });
    });
};
