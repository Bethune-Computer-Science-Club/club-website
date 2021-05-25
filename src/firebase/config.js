import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
require('firebase/auth');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDTs7l84MAOanpgKmore8VZpXFXAvoK1S4",
  authDomain: "club-website-a61d0.firebaseapp.com",
  projectId: "club-website-a61d0",
  storageBucket: "club-website-a61d0.appspot.com",
  messagingSenderId: "871545420079",
  appId: "1:871545420079:web:d6e1fd1d49d374f18589da"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION); //User will have to login again after they close the tab or window

export { projectStorage, projectFirestore, auth, timestamp };