import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { UserDetails, UserSateInterface } from './Store/reducers/auth.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: UserDetails = {
    userName: 'Buddha',
    email: 'buddha@gamil.com',
    age: 24,
  };
  login(email: string, password: string): Observable<UserDetails> {
    return of(this.user).pipe(delay(2000));
  }
}
