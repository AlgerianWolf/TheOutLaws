// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNeHDJbUnq2qQhbQq7ckECGPOK2XhyDqk",
  authDomain: "sing-up-or-login-8452c.firebaseapp.com",
  projectId: "sing-up-or-login-8452c",
  storageBucket: "sing-up-or-login-8452c.appspot.com",
  messagingSenderId: "828644738832",
  appId: "1:828644738832:web:d499a3f8d75685b0c74795",
  measurementId: "G-HPL85MLDGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
