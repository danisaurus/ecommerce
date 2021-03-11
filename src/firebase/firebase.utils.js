import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAbkyVL6v5376y1eR0WOLIyxaomd3p4R74",
    authDomain: "crwn-db-a5c83.firebaseapp.com",
    projectId: "crwn-db-a5c83",
    storageBucket: "crwn-db-a5c83.appspot.com",
    messagingSenderId: "323926105860",
    appId: "1:323926105860:web:e9005ca7140f8f26523a51",
    measurementId: "G-0J68VYN3DF"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
