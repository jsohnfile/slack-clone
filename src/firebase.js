import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtoiDJaXELE8J7AS0zJ6g0iJ7MtARI8mo",
    authDomain: "slack-clone-eb04e.firebaseapp.com",
    databaseURL: "https://slack-clone-eb04e.firebaseio.com",
    projectId: "slack-clone-eb04e",
    storageBucket: "slack-clone-eb04e.appspot.com",
    messagingSenderId: "362392454228",
    appId: "1:362392454228:web:ba5781b74465403f0899c1",
    measurementId: "G-XSWC9FF5P0"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider;

  export { auth, provider };
  export default db;