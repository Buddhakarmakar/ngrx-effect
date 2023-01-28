import { createReducer, on } from '@ngrx/store';
import {
  decrement,
  increment,
  multiply,
} from '../../Store/actions/counter.action';

const initialState = {
  counter: 0,
};

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, (state) => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(multiply, (state, { multiplyBy }) => {
    return { ...state, counter: state.counter * multiplyBy };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
