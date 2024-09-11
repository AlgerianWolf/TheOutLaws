document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // أضف هنا كود تسجيل مستخدم جديد باستخدام Firebase
    console.log('Sign up with:', name, email, password);
});
