import { FETCH_BARS } from '../actions/barsAction';

const initialState = {
  bars: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_BARS:
      return { ...state, bars: action.payload };

    default:
      return state;
  }
}
