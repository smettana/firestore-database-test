import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyC-zTQRWaBfdsPkgi1Kq90Y-6pBAeMVaFQ",
    authDomain: "test-for-rabbi.firebaseapp.com",
    databaseURL: "https://test-for-rabbi.firebaseio.com",
    projectId: "test-for-rabbi",
    storageBucket: "test-for-rabbi.appspot.com",
    messagingSenderId: "1042188674965",
    appId: "1:1042188674965:web:839eb9ad8747f223b8b89c"
};
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const dataBase =  firebase.database();
export const usersRef = databaseRef.child("users");