import firebase from 'firebase/index'
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBIQoC-MRMIOHFSqXBn9p8QjY8Kt--F6Us",
    authDomain: "deezneeplus.firebaseapp.com",
    projectId: "deezneeplus",
    storageBucket: "deezneeplus.appspot.com",
    messagingSenderId: "564780281115",
    appId: "1:564780281115:web:96215ea1a5a5a12a85b7be",
    measurementId: "G-16M2J4BCH2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, storage, provider}
  export default db;

