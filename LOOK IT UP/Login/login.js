const user = "admin@gmail.com";
const password = "1234";

// Verificar si ya está logueado
if (localStorage.getItem('loggedIn')) {
    window.location.href = "../Home/home.html"; // Redirige directamente a home.html si ya está logueado
}

const loginForm = document.getElementById("loginForm");
const mensajeError = document.getElementById("mensajeError");

// Capturar el envío del formulario
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Obtener los valores ingresados por el usuario
    const usuarioIngresado = document.getElementById("username").value.trim();
    const contrasenaIngresada = document.getElementById("password").value.trim();

    // Verificar si coinciden con las credenciales
    if (usuarioIngresado === user && contrasenaIngresada === password) {
        // Almacenar en el localStorage que el usuario ha iniciado sesión
        localStorage.setItem('loggedIn', 'true');
        // Redirige al home.html si las credenciales son correctas
        window.location.href = "../Home/home.html";
    } else {
        // Caso contrario mostrará el mensaje de error
        mensajeError.classList.remove("d-none");
        mensajeError.classList.add("d-block");
        mensajeError.textContent = "Usuario o contraseña incorrectos.";
    }
});

// Ocultar el mensaje de error cuando el usuario comienza a escribir
loginForm.addEventListener("input", function () {
    mensajeError.classList.remove("d-block");
    mensajeError.classList.add("d-none");
});

// Vincular los íconos de redes sociales
const socialIcons = document.querySelectorAll(".social-icon");

socialIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
        // Verificar qué icono fue clickeado y redirigir a la URL correspondiente
        const altText = icon.getAttribute("alt").toLowerCase();

        if (altText.includes("facebook")) {
            window.open("https://www.facebook.com/", "_blank"); 
        } else if (altText.includes("linkedin")) {
            window.open("https://www.linkedin.com/", "_blank"); 
        } else if (altText.includes("twitter")) {
            window.open("https://x.com/i/flow/login?lang=es", "_blank"); 
        } else if (altText.includes("google")) {
            window.open("https://accounts.google.com/AccountChooser?service=CPanel&continue=https%3A%2F%2Fadmin.google.com%2Fctech.mx%2FDashboard&hl=es", "_blank"); // Abre en una nueva pestaña
        } else {
            console.error("Red social no encontrada");
        }
    });
});
