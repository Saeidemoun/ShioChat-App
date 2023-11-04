import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCSn34gGVBRcmCtd0GKyGmsLudHTEdbu3k",
    authDomain: "shiochat-app.firebaseapp.com",
    projectId: "shiochat-app",
    storageBucket: "shiochat-app.appspot.com",
    messagingSenderId: "656355211851",
    appId: "1:656355211851:web:85795165d59a072abcebce",
    measurementId: "G-RH7WWFRRDW",
  })
  .auth();
