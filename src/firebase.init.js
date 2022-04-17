// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzS_YpE5m4gUIkp1LC7HPjs2EHBZ3p9GI",
    authDomain: "ema-jhon-shopping-9ec06.firebaseapp.com",
    projectId: "ema-jhon-shopping-9ec06",
    storageBucket: "ema-jhon-shopping-9ec06.appspot.com",
    messagingSenderId: "718215667932",
    appId: "1:718215667932:web:3044bdcf702257a81c1419"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;