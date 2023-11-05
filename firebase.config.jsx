
import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore ,} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBhV_MvcqnJp2aD-Xq9ubev14gHHXp9jUg",
    authDomain: "dzcoin-61333.firebaseapp.com",
    projectId: "dzcoin-61333",
    storageBucket: "dzcoin-61333.appspot.com",
    messagingSenderId: "156755744123",
    appId: "1:156755744123:web:8806f13bf700ca591b19de"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
 const db = getFirestore(app);
  
 export {app ,auth ,db } 