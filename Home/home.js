function search() {
    const query = document.getElementById('search-bar').value;
    if (query) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(searchUrl, '_blank');
    } else {
        alert('Please enter a search query!');
    }
}