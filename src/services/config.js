import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBj_44uyNK2iD4y9_Id_JIC4NCxfyqt9TY',
  authDomain: 'mymoney-98ac5.firebaseapp.com',
  projectId: 'mymoney-98ac5',
  storageBucket: 'mymoney-98ac5.appspot.com',
  messagingSenderId: '253382614520',
  appId: '1:253382614520:web:8a7cc2e19ed7692c248a0d',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const db = firebase.firestore();
const auth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { db, auth, timestamp };
