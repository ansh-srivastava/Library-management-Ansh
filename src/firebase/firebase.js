// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkZI3JXoTaGVt_OIrU7Qy3HhUQM0ujUXo",
  authDomain: "library-management-syste-398af.firebaseapp.com",
  projectId: "library-management-syste-398af",
  storageBucket: "library-management-syste-398af.appspot.com",
  messagingSenderId: "158252840642",
  appId: "1:158252840642:web:23ba190e52497e61652d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
