// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAH20qPJAR6bso3aN4wZGSe0nMwCNRz2r4",
    authDomain: "blogsite-1d461.firebaseapp.com",
    projectId: "blogsite-1d461",
    storageBucket: "blogsite-1d461.appspot.com",
    messagingSenderId: "754656795841",
    appId: "1:754656795841:web:6b1ca37c127c7ee75c8840",
    measurementId: "G-KS46WD9609"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let db = firebase.firestore();