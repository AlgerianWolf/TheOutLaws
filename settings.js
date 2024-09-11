document.getElementById('settings-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newPassword = document.getElementById('new-password').value;

    // أضف هنا كود تحديث كلمة المرور أو إعدادات أخرى باستخدام Firebase
    console.log('New password:', newPassword);
});
