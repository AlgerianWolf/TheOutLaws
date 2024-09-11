document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // أضف هنا كود تسجيل الدخول باستخدام Firebase
    console.log('Login with:', email, password);
});
