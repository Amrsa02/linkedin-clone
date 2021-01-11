import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyD5IvJIKwLc8Aj8Fb72TCJODDYViJY0W60',
  authDomain: 'linkedin-clone-6c4fa.firebaseapp.com',
  projectId: 'linkedin-clone-6c4fa',
  storageBucket: 'linkedin-clone-6c4fa.appspot.com',
  messagingSenderId: '43821334248',
  appId: '1:43821334248:web:246dba9125b76ced16135d',
  measurementId: 'G-2BFYL953P1'
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
