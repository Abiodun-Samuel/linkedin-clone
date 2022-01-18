import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAji-_9V19s6ZXzFLBu7D9Jfe6_5W9XRcg",
  authDomain: "linkedin-1d4c9.firebaseapp.com",
  projectId: "linkedin-1d4c9",
  storageBucket: "linkedin-1d4c9.appspot.com",
  messagingSenderId: "849748853301",
  appId: "1:849748853301:web:0a6a3ae9ac19c2708ba77c",
  measurementId: "G-W9EQTRH86W",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const colRef = collection(db, "posts");
