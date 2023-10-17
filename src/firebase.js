// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa2AvHztGVbX8E4iAWa28_1lKbTYEwONY",
  authDomain: "class-web-13664.firebaseapp.com",
  projectId: "class-web-13664",
  storageBucket: "class-web-13664.appspot.com",
  messagingSenderId: "283503830607",
  appId: "1:283503830607:web:805cf676684c7adfefec3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();