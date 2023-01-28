import { createAction,props } from '@ngrx/store';

export const increment = createAction('[App Component] Increment');

export const decrement = createAction('[App Component] Decrement');

export const multiply = createAction('[App Component] Multiply',props<{multiplyBy:number}>());
