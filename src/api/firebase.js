import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};
Firebase.initializeApp(config);

// Authentication helpers
export const authRef = {
  login: (email, password) => {
    return Firebase.auth().signInWithEmailAndPassword(email, password);
  },

  logout: () => {
    return Firebase.auth().signOut();
  },
  getCurrentUser: (func) => {
    return Firebase.auth().onAuthStateChanged(func);
  },
};
// Database references
const databaseRef = Firebase.database().ref();

export const postsRef = databaseRef.child("posts");
