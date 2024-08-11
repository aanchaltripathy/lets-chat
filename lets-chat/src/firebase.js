// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithRedirect, GoogleAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBisJ_tfzYZa4mPU4wp4xKZC9iAIij6FSU",
  authDomain: "lets-chat-f9512.firebaseapp.com",
  projectId: "lets-chat-f9512",
  storageBucket: "lets-chat-f9512.appspot.com",
  messagingSenderId: "918437446402",
  appId: "1:918437446402:web:7daa2c34b1705640c9b81b",
  measurementId: "G-0QYQH30VYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, signInWithRedirect };
