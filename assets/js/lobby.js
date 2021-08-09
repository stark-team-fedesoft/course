
const btnSalir = document.getElementById('btnSalir');
btnSalir.addEventListener('click', (evt) => {
    Swal.fire({
    title: 'Cerrar Sesión!',
    text: '¡Vuelve pronto!',
    icon: 'info',
    confirmButtonText: 'Salir'
}).then((result) => {
    localStorage.removeItem('loggedIn');
    window.location.href = "login.html";
});
});

