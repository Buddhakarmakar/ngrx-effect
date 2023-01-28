import { createReducer, on } from "@ngrx/store";
import { userLogin, userLoginSuccess } from "../../Store/actions/auth.action";

export interface UserDetails{
  userName:string | null;
  email:string | null ;
  age:number | null
}
export interface UserSateInterface{
  user:UserDetails,
  isLoading:boolean,
  error:string
}
const User:UserDetails={
  userName:null,
  email:null,
  age:null
}

const initialState:UserSateInterface={
  user:User,
  isLoading:false,
  error:null
}

const _authReducer=createReducer(initialState,
  on(userLogin,(state,{email,password})=>{
    return { ...state,isLoading:true}
  }),
  on(userLoginSuccess,(state,action)=> {
    return { ...state,user:action.user,isLoading:false}
  })
  )

  export function authReducer(state,action){
    return _authReducer(state,action)
  }