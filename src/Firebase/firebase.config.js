// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA34VHPz9E4eKW48hmWUQUNZ59ytNo1FN4",
  authDomain: "smart-deals-777.firebaseapp.com",
  projectId: "smart-deals-777",
  storageBucket: "smart-deals-777.firebasestorage.app",
  messagingSenderId: "601692168625",
  appId: "1:601692168625:web:53de1e415eaf977a789d90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)