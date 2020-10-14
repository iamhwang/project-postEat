import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  apiKey: 'AIzaSyCVyQKVyLh7yo3-szC3n_PSr2I0kSbY1us',
  authDomain: 'posteat-d658b.firebaseapp.com',
  databaseURL: 'https://posteat-d658b.firebaseio.com',
  projectId: 'posteat-d658b',
  storageBucket: 'posteat-d658b.appspot.com',
  messagingSenderId: '1056443819818',
  appId: '1:1056443819818:web:00adb92039c09aaa69a053',
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();

export const dbService = firebase.firestore();
