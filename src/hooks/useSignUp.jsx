import { useState ,useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase.config"
const useSignup = () => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const {dispatch} = useAuthContext();
  
  /// create an Account using firebase method 
  
  const signUp = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await createUserWithEmailAndPassword(auth,
        email,
        password
      );
      
      if (!res.user) {
        throw new Error("Could not complete signup");
      }
      
      // update the display name using firebase method
      await res.user.updateProfile({ displayName: displayName });
      
      // dispatch login action 
      dispatch({type:'LOGIN' , payload:res.user}) ;
      

      // handling canceling the proccessing 
      if(!isCanceled){
      setIsPending(false);
      setError(null);
      console.log(res.user)
      }
      }
      catch (err) {
        if(!isCanceled){
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
        }
    }
  }
  
  useEffect(()=>{
    return ()=> setIsCanceled(true)
    },[])
  return {
    signUp,
    error,
    isPending,
    
  };
};

export default useSignup;
