import { createSelector } from '@ngrx/store';

export interface FeatureState {
  counter: number;
}
export interface AppState {
  count: FeatureState;
}

export const selectFeature = (state: AppState) => state.count;

export const selectFeatureCount = createSelector(
  selectFeature,
  (state) => state.counter
);
