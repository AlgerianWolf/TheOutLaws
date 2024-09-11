document.getElementById('new-post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const postContent = document.getElementById('new-post').value;

    // أضف هنا كود إضافة مشاركة جديدة باستخدام Firebase
    console.log('New post:', postContent);
});
