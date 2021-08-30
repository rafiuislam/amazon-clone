// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_fkBYTzFjTNSENBC6ajURTyJ0pOugqRM",
  authDomain: "challege-11b72.firebaseapp.com",
  databaseURL: "https://challege-11b72.firebaseio.com",
  projectId: "challege-11b72",
  storageBucket: "challege-11b72.appspot.com",
  messagingSenderId: "963790348324",
  appId: "1:963790348324:web:efeed33c0c2b7b3656b8b1",
  measurementId: "G-4G2BMF3161",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
