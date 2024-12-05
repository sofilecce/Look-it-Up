document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email && password) {
      alert('Inicio de sesión exitoso!');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });
  