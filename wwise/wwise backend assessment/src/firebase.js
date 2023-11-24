import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCJOA7wbRY22m4pdwIV_xjyyCSPK24oiXQ",
  authDomain: "wwise-9e54b.firebaseapp.com",
  projectId: "wwise-9e54b",
  storageBucket: "wwise-9e54b.appspot.com",
  messagingSenderId: "1030549124132",
  appId: "1:1030549124132:web:f12f25958c1053bd7ad4b1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
