document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const query = document.getElementById('search-query').value;

    // أضف هنا كود البحث باستخدام Firebase
    console.log('Search query:', query);
});
