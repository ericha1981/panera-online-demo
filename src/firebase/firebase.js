import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDXFB37p3k1NAuEdR-3ynI48aQGxubopLE",
    authDomain: "panera-online-demo.firebaseapp.com",
    databaseURL: "https://panera-online-demo.firebaseio.com",
    projectId: "panera-online-demo",
    storageBucket: "",
    messagingSenderId: "634759443607"
};

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
const storageRef = firebase.storage().ref();

export {
    databaseRef,
    storageRef
};


// firebase-app - The core firebase client (required).
// firebase-auth - Firebase Authentication (optional).
// firebase-database - The Firebase Realtime Database (optional).
// firebase-storage - Firebase Storage (optional).
// firebase-messaging - Firebase Cloud Messaging (optional).