import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp,
  increment,
  updateDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmbkRrVxKWDejh31jy2QMDOsAeAPGCeKs",
  authDomain: "a-to-z-e4ef5.firebaseapp.com",
  projectId: "a-to-z-e4ef5",
  storageBucket: "a-to-z-e4ef5.firebasestorage.app",
  messagingSenderId: "934850767788",
  appId: "1:934850767788:web:523193193e45838588a809",
  measurementId: "G-PFD0C6C4S2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export {
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp,
  increment,
  updateDoc
};