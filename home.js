function search() {
    const query = document.getElementById('search-bar').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}
function logout() {
    // Redirige a la página de Sesión Cerrada
    window.location.href = "logout.html";
}
