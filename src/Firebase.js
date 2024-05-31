import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD0F9kV-6utLucq3A5zZ-gM02zpyTddfAc",
  authDomain: "first-firebase-f1344.firebaseapp.com",
  databaseURL: "https://first-firebase-f1344-default-rtdb.firebaseio.com",
  projectId: "first-firebase-f1344",
  storageBucket: "first-firebase-f1344.appspot.com",
  messagingSenderId: "456490214115",
  appId: "1:456490214115:web:0c92f47f016b60a7065bd6",
  measurementId: "G-RP3TSV0318"
};

export const app = initializeApp(firebaseConfig);