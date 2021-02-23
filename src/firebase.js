import firebase from "firebase";

const firebaseConfig = {
  apiKey: 'AIzaSyBCGXz_wTRs5DO1inG0YSHNKYhxGLotuRo',
  authDomain: 'clone-f13f7.firebaseapp.com',
  projectId: 'clone-f13f7',
  storageBucket: 'clone-f13f7.appspot.com',
  messagingSenderId: '837850917310',
  appId: '1:837850917310:web:33c862526c3f836f2b71ef',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth}
