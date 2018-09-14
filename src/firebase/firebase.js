import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCvj_82J3vyP7zo2NX0_qFzxF9nAICv9fo",
    authDomain: "expensify-4b258.firebaseapp.com",
    databaseURL: "https://expensify-4b258.firebaseio.com",
    projectId: "expensify-4b258",
    storageBucket: "expensify-4b258.appspot.com",
    messagingSenderId: "42549709771"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

