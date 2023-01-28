import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap } from 'rxjs/operators';
import { AuthService } from '../../auth.service';
import { userLogin, userLoginSuccess } from '../../Store/actions/auth.action';
import { UserDetails } from '../../Store/reducers/auth.reducer';

@Injectable({
  providedIn:"root"
})
export class AuthEffect {
  // authLogin = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(userLogin),
  //     mergeMap((action) => {
  //        this.authService
  //         .login(action.email, action.password)
  //         .pipe(map((user) => userLoginSuccess({ user })));
  //     })
  //   )
  // );
  authLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userLogin),
      exhaustMap((action) => {
        return this.authService
          .login(action.email, action.password)
          .pipe(map((user:UserDetails) => userLoginSuccess({ user })));
      })
    )
  );
  constructor(private actions$: Actions, private authService: AuthService) {}
}
