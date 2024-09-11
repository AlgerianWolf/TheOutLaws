// Script for handling messages functionality
document.getElementById('newMessageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newMessageContent = document.getElementById('message').value;
    console.log('رسالة جديدة:', newMessageContent);

    // Add logic to send the message and display it
});
