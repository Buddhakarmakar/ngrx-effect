import { createSelector } from '@ngrx/store';
import { UserSateInterface } from '../../Store/reducers/auth.reducer';

export interface authState {
  authUser: UserSateInterface;
}
export const selectFeature = (state: authState) => state.authUser;

export const authLoginSelector = createSelector(
  selectFeature,
  (state: UserSateInterface) => state.isLoading
);

export const authLoginSuccessSelector = createSelector(
  selectFeature,
  (state) => state.user
);

// export const authLoginSelector = createSelector(
//   selectFeature,
//   (state: UserSateInterface) => state
// );

// export interface UserSate {
//   user: User;
// }

// export const userFeatureSelector = (state: UserSate) => state.user;

// export const userSelector = createSelector(userFeatureSelector, (state) => state);
