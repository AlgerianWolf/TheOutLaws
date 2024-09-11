// Script for handling settings functionality
document.getElementById('settingsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newPassword = document.getElementById('password').value;
    const privacySetting = document.getElementById('privacy').value;

    console.log('تغيير كلمة المرور:', newPassword);
    console.log('إعدادات الخصوصية:', privacySetting);

    // Add logic to save settings
});
