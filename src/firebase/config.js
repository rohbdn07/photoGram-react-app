import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBaZsLOyRnbfa9mfNV26ylo6CKMFPAF9zs",
  authDomain: "photogram-4d747.firebaseapp.com",
  databaseURL: "https://photogram-4d747.firebaseio.com",
  projectId: "photogram-4d747",
  storageBucket: "photogram-4d747.appspot.com",
  messagingSenderId: "585869750360",
  appId: "1:585869750360:web:7db59b9dd255c0f8a01a2d",
  measurementId: "G-WW83HJDYFE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
