document.getElementById('new-message-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const recipient = document.getElementById('message-recipient').value;
    const content = document.getElementById('message-content').value;

    // أضف هنا كود إرسال رسالة جديدة باستخدام Firebase
    console.log('New message to:', recipient, 'Content:', content);
});
