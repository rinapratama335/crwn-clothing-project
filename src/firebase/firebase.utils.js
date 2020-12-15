import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBX6GpbwbMGeqV88L3pJwftaJ59BUjZn_o",
  authDomain: "cronw-clothing-project.firebaseapp.com",
  projectId: "cronw-clothing-project",
  storageBucket: "cronw-clothing-project.appspot.com",
  messagingSenderId: "362581879516",
  appId: "1:362581879516:web:e965d4b5ca50c71a242219",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
