import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCugTZODfH5ojqBKZ2mu-jA9-LZfjyVBQ4",
    authDomain: "react-website-db-79f3e.firebaseapp.com",
    projectId: "react-website-db-79f3e",
    storageBucket: "react-website-db-79f3e.appspot.com",
    messagingSenderId: "433167353096",
    appId: "1:433167353096:web:45978e86ee8662d545d8bd",
    measurementId: "G-TMYTNCGDN7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;