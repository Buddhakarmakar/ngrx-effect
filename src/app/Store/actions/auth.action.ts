import { createAction, props } from '@ngrx/store';
import { UserDetails } from '../../Store/reducers/auth.reducer';

export const userLogin = createAction(
  '[LogIn Component] User login',
  props<{ email: string; password: string }>()
);

export const userLoginSuccess = createAction(
  '[LogIn Component] User Login Success',
  props<{ user: UserDetails }>()
);
