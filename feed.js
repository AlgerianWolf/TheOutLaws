// Script for handling feed functionality
document.getElementById('newPostForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newPostContent = document.getElementById('newPost').value;
    console.log('مشاركة جديدة:', newPostContent);

    // Add logic to save the post and display it
});
