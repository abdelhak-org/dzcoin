import { createContext, useEffect, useReducer } from "react";
import {onAuthStateChanged}  from "firebase/auth"
import {auth } from"../../../firebase.config"

// Create a context
export const AuthContext = createContext();

// create reducer function
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY" :
        return {...state , user:action.payload ,authIsReady:true }
    default:
      return state;
  }
};

// create a provider function
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null , authIsReady : false });

  useEffect( ()=>{
    const getAuthUser = async ()=>{
      const unsub =  onAuthStateChanged(auth,(userCredential)=>{
        dispatch({type:"AUTH_IS_READY" , payload:userCredential})
        unsub()
      })
    }    
    getAuthUser()
  },[])


  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
