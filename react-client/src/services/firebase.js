// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD26drACFvdBX6LbXfPkFGEZNRU7dL23Zg",
  authDomain: "fbproject-35509.firebaseapp.com",
  projectId: "fbproject-35509",
  storageBucket: "fbproject-35509.appspot.com",
  messagingSenderId: "1071898956715",
  appId: "1:1071898956715:web:6fbd292825e8b33925f8ee"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
export default app