import { Component, OnInit, VERSION } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, multiply } from './Store/actions/counter.action';
import { login } from './Store/actions/user.action';
import { User } from './Store/reducers/user.reducer';
import {
  selectFeatureCount,
  AppState,
} from './Store/selectors/counter.selector';
import { UserSate, userSelector } from './Store/selectors/user.selector';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  count$: Observable<number>;
  loggedInUser: Observable<User>;
  name = 'Angular ' + VERSION.major;
  constructor(
    private store: Store<AppState>,
    private userStore: Store<UserSate>
  ) {}
  ngOnInit() {
    this.count$ = this.store.pipe(select(selectFeatureCount));
    this.loggedInUser = this.userStore.pipe(select(userSelector));
  }
  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  multiplyBy(no: number) {
    this.store.dispatch(multiply({ multiplyBy: no }));
  }
  login() {
    this.userStore.dispatch(login({ username: 'Buddha', password: '123' }));
   this.loggedInUser.subscribe(d=>{
    console.log(d)
    })
  }
}
