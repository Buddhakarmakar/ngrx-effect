import { createReducer, on } from '@ngrx/store';
import { login } from '../../Store/actions/user.action';

export interface User {
  username: string;
  password: string;
  email: string;
}
const initialState: User = {
  username: '',
  password: '',
  email: '',
};
export const userDate: User[] = [
  {
    username: 'Buddha',
    password: '123',
    email: 'buddha@gmail.com',
  },
];
export const _userReducer = createReducer(
  initialState,
  on(login, (state, { username, password }) => {
    let loggedInUser = userDate.filter(
      (user: User) => user.username === username && user.password === password
    );
    if (loggedInUser.length) {
      return {
        ...state,
        username: loggedInUser[0].username,
        email: loggedInUser[0].email,
      };
    }
    return { ...state };
  })
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}
