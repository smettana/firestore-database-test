import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCpNOv_wze0U4ZLw6LnXh9yf0qLOT6z9Bc",
    authDomain: "users-firebase-daace.firebaseapp.com",
    databaseURL: "https://users-firebase-daace.firebaseio.com",
    projectId: "users-firebase-daace",
    storageBucket: "users-firebase-daace.appspot.com",
    messagingSenderId: "18857738986",
    appId: "1:18857738986:web:b6cb0b8f88725b8f9f0d93"
};
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const dataBase =  firebase.database();
export const usersRef = databaseRef.child("users");