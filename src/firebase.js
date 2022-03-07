import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB98SZsc5KAD6CG06b296HXZ8ZhQDSuOTQ",
  authDomain: "netflixclone-9ef5c.firebaseapp.com",
  projectId: "netflixclone-9ef5c",
  storageBucket: "netflixclone-9ef5c.appspot.com",
  messagingSenderId: "19841288466",
  appId: "1:19841288466:web:e7e1bd2210c413899d0bcb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
