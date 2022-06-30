// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCqBF9bzY7GDLeoGS16BJG8jIYqzIE1pDI",
  authDomain: "budget-app-86e3c.firebaseapp.com",
  projectId: "budget-app-86e3c",
  storageBucket: "budget-app-86e3c.appspot.com",
  messagingSenderId: "291094300717",
  appId: "1:291094300717:web:7a53cca453c18df49910a4",
  measurementId: "G-M25WFX5VN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);
const db=getFirestore(app)

const analytics = getAnalytics(app);

export {auth, db} ;