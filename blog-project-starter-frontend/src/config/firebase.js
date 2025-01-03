import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnpSRGICi7vxRSxV1VfhW8-GuSdwB2s-s",
  authDomain: "beyond-the-scroll.firebaseapp.com",
  projectId: "beyond-the-scroll",
  storageBucket: "beyond-the-scroll.firebasestorage.app",
  messagingSenderId: "299649350306",
  appId: "1:299649350306:web:ab5a7542e6c0c9bd6b35fb",
  measurementId: "G-JR096MPCLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

export default auth;
