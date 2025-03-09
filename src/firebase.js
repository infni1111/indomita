import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getDatabase,get,ref,set,update,onValue,push} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj9aZNvSBaAQQ5p7R0ZM0ooGkjzxfY46w",
  authDomain: "hacker-infni.firebaseapp.com",
  databaseURL: "https://hacker-infni-default-rtdb.firebaseio.com",
  projectId: "hacker-infni",
  storageBucket: "hacker-infni.firebasestorage.app",
  messagingSenderId: "373480783009",
  appId: "1:373480783009:web:dd05bd0a4170ee4de984e0"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const analytics = getAnalytics(app);


export {database,get,set,ref,update,push,onValue}