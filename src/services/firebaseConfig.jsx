
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGKT3Z-RzFir8akn4IImW8sQHhVyLSGWI",
  authDomain: "elclubdelmate-52d41.firebaseapp.com",
  projectId: "elclubdelmate-52d41",
  storageBucket: "elclubdelmate-52d41.appspot.com",
  messagingSenderId: "437073668835",
  appId: "1:437073668835:web:4167022401a5ae66b433d6",
  measurementId: "G-V1CQK50GEP"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);