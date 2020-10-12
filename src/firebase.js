import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCVyQKVyLh7yo3-szC3n_PSr2I0kSbY1us",
  authDomain: "posteat-d658b.firebaseapp.com",
  databaseURL: "https://posteat-d658b.firebaseio.com",
  projectId: "posteat-d658b",
  storageBucket: "posteat-d658b.appspot.com",
  messagingSenderId: "1056443819818",
  appId: "1:1056443819818:web:00adb92039c09aaa69a053"
};

export default firebase.initializeApp(firebaseConfig);