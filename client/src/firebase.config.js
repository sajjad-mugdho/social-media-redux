// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPyKR-uJxk2cfI5gkjXyNy5bGB3Ipj-9U",
    authDomain: "facemimu.firebaseapp.com",
    projectId: "facemimu",
    storageBucket: "facemimu.appspot.com",
    messagingSenderId: "806927097767",
    appId: "1:806927097767:web:369902d5f39101a2d56082"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;