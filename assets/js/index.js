const login    = document.getElementById('login');
const register = document.getElementById('register');
const navItems = document.getElementById('nav-items');

// verificar sesión
const loggedIn = localStorage.getItem('loggedIn');
if( loggedIn ) {
    // eliminar enlaces de registro y login
    login.remove();
    register.remove();
    // crear enlace de entrada al app
    const a = document.createElement('a');
    a.className = "navbar-brand";
    a.href = './views/lobby.html';
    a.innerHTML = '<i class="fas fa-sign-in"></i> Ingresar al app';
    // enviar enlace  a menu superior
    navItems.append(a);
}
