// Función para manejar el registro de usuario
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los datos del formulario de registro
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('emailRegistro').value;
    const contrasena = document.getElementById('contrasenaRegistro').value;

    // Validar que los campos no estén vacíos
    if (nombre && email && contrasena) {
        // Guardar los datos en localStorage simulando una base de datos
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push({ nombre, email, contrasena });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        window.location.href = 'iniciosesion.html'; // Redirigir al inicio de sesión
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Función para manejar el inicio de sesión
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los datos del formulario de inicio de sesión
    const email = document.getElementById('email').value;
    const contrasena = document.getElementById('contrasena').value;

    // Obtener la lista de usuarios del localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar si el usuario existe
    const usuario = usuarios.find(user => user.email === email && user.contrasena === contrasena);

    if (usuario) {
        alert(`Bienvenido, ${usuario.nombre}`);
        // Redirigir al área principal o realizar otra acción
        window.location.href = 'index1.html'; // Por ejemplo, a una página de inicio
    } else {
        alert('Correo o contraseña incorrectos.');
    }
});
