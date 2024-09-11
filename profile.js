// Script for profile page functionality
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('مستخدم مسجل الدخول:', user);
        // Update profile information in the UI
        document.getElementById('userName').textContent = user.displayName || 'غير معروف';
        document.getElementById('userEmail').textContent = user.email;
    } else {
        console.log('لم يتم تسجيل الدخول');
        window.location.href = 'login.html';  // Redirect to login page if not authenticated
    }
});
