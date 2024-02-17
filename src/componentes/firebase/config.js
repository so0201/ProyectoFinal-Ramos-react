import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiKF0n_f2fwBfFNCmFG90ZBeB3zTJ0Xj8",
  authDomain: "proyectofinal-cb4db.firebaseapp.com",
  projectId: "proyectofinal-cb4db",
  storageBucket: "proyectofinal-cb4db.appspot.com",
  messagingSenderId: "834484435815",
  appId: "1:834484435815:web:ca2267ad78898c74a90dc2"
};


const app = initializeApp(firebaseConfig); 
export const database = getFirestore(app);