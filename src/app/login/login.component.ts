import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { userLogin } from '../Store/actions/auth.action';
import { UserDetails, UserSateInterface } from '../Store/reducers/auth.reducer';
import {
  authLoginSelector,
  authLoginSuccessSelector,
  authState,
} from '../Store/selectors/auth.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<authState>) {
    this.store.dispatch(
      userLogin({ email: 'buddha@gmail.com', password: '123' })
    );
  }
  isLoading: Observable<boolean>;
  mydata: Observable<UserDetails>;
  ngOnInit() {
    this.isLoading = this.store.pipe(select(authLoginSelector));
    this.mydata = this.store.pipe(select(authLoginSuccessSelector));

    // this.userDetails.subscribe(d=>{
    //   console.log("data => ",d)
    // })
  }
}
