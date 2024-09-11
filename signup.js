// Script for handling sign-up functionality
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const auth = getAuth();

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            console.log('تسجيل جديد بنجاح:', userCredential.user);
            window.location.href = 'login.html';  // Redirect to login page after signup
        })
        .catch((error) => {
            console.error('خطأ في التسجيل:', error.message);
        });
});
