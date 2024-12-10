function search() {
    const query = document.getElementById('search-bar').value.trim();
    if (query) {
        window.location.href = `../Inicio/inicio.html?search=${encodeURIComponent(query)}`;
    }
}

// Cierre de sesión
function logout() {
    // Eliminar el valor 'loggedIn' en el localStorage
    localStorage.removeItem('loggedIn');
    // Redirige a la página de Sesión Cerrada
    window.location.href = "logout-home.html";
}

// Verificar si el usuario está logueado antes de acceder al home
window.onload = function() {
    // Si loggedIn no está en localStorage, redirigir al login
    if (!localStorage.getItem('loggedIn')) {
        window.location.href = "../Login/index.html";
    }
};

// Para buscar con Enter
document.getElementById('search-bar').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        search();  // Ejecuta la búsqueda cuando se presiona Enter
    }
});

