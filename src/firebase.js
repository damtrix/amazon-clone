
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEVpv-zi1fZQyB1CeJNaaJn06Tck1feqU",
  authDomain: "clone-855c0.firebaseapp.com",
  databaseURL: "https://clone-855c0.firebaseio.com",
  projectId: "clone-855c0",
  storageBucket: "clone-855c0.appspot.com",
  messagingSenderId: "279039539486",
  appId: "1:279039539486:web:216c70a47bac6e29d9b10f",
  measurementId: "G-44C3HKXR3S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };