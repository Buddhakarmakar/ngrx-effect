import { createSelector } from '@ngrx/store';
import { User } from '../../Store/reducers/user.reducer';

export interface UserSate {
  user: User;
}

export const userFeatureSelector = (state: UserSate) => state.user;

export const userSelector = createSelector(userFeatureSelector, (state) => state);
