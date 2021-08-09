
const btnSalir = document.getElementById('btnSalir');
const user = JSON.parse(localStorage.getItem('user'));
const fullname = document.getElementById('fullname');
fullname.innerHTML = `${user.name} ${user.lastname}`;
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

