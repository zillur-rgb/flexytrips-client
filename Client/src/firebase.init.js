// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzEgVM1-FSohRA42tnZbsBcSl_5_VHWUo",
  authDomain: "flexytrips.firebaseapp.com",
  projectId: "flexytrips",
  storageBucket: "flexytrips.appspot.com",
  messagingSenderId: "599051575610",
  appId: "1:599051575610:web:27235087a5a62533943003",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
