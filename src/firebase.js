import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ4xMPehCGkLGKjIwIfLoGgP1O_-b5k2k",
  authDomain: "linkedin-clone-rugg-d55c2.firebaseapp.com",
  projectId: "linkedin-clone-rugg-d55c2",
  storageBucket: "linkedin-clone-rugg-d55c2.appspot.com",
  messagingSenderId: "747637633419",
  appId: "1:747637633419:web:a2809e42ce1d51f7e67f8e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
