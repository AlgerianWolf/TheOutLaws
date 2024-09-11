// Script for handling login functionality
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const auth = getAuth();

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            console.log('تسجيل الدخول بنجاح:', userCredential.user);
            window.location.href = 'profile.html';  // Redirect to profile page after login
        })
        .catch((error) => {
            console.error('خطأ في تسجيل الدخول:', error.message);
        });
});
