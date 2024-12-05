// Variables de usuario y contraseña
const user = "admin@gmail.com";
const password = "1234";

// Vinculamos el formulario y el mensaje de error con el DOM
const loginForm = document.getElementById("loginForm");
const mensajeError = document.getElementById("mensajeError");

// Evento para capturar el envío del formulario
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Obtener los valores ingresados por el usuario
    const usuarioIngresado = document.getElementById("username").value.trim();
    const contrasenaIngresada = document.getElementById("password").value.trim();

    // Verificar si coinciden con las credenciales
    if (usuarioIngresado === user && contrasenaIngresada === password) {
        // Redirigir a home.html si las credenciales son correctas
        window.location.href = "home.html";
    } else {
        // Mostrar el mensaje de error
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