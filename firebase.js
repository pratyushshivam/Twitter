import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTYGTWWVJ4p1qN1fb_veDyLXGDrCIJGPo",
  authDomain: "twitter-426d2.firebaseapp.com",
  databaseURL: "https://twitter-426d2.firebaseio.com",
  projectId: "twitter-426d2",
  storageBucket: "twitter-426d2.appspot.com",
  messagingSenderId: "1095428304549",
  appId: "1:1095428304549:web:d76246a0ed776ca837a74c",
  measurementId: "G-66KY14EZMV"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
