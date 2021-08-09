const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const userRegistered = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
const loggedIn = localStorage.getItem("loggedIn");
const authPages = ['login.html', 'registro.html']

if (loggedIn) {
    const currentRoute = location.href.substring(location.href.lastIndexOf('/') + 1);
    const isRouteAuth = authPages.find(page => page === currentRoute);
    if (isRouteAuth) location.href = "lobby.html"
}

if (registerForm) {
    registerForm.onsubmit = function (e) {
        e.preventDefault();

        const formElements = registerForm.elements;
        // obj user
        let user = {
            name: '',
            lastname: '',
            email: '',
            password: '',
        }
        // inputs del formulario HTML
        for (let input of formElements) {
            // valor de campo
            const value = input.value;
            // llenar obj usuario con los campos html
            if (input.id === "nombre") user.name = value;
            if (input.id === "apellido") user.lastname = value;
            if (input.id === "email") user.email = value;
            if (input.id === "password") user.password = value;
        }

        localStorage.setItem('user', JSON.stringify(user));

        /* alert("registro correcto, ahora puede inicar sesión"); */
        Swal.fire({
            title: 'Registrado!',
            text: 'Registro completado con exito ahora puedes iniciar sesión',
            icon: 'success',
            confirmButtonText: 'Ok'
        }).then((result) => {
            window.location.href = "login.html";
        });
    }
}

if (loginForm) {
    loginForm.onsubmit = function (e) {
        e.preventDefault();

        const divEl = document.createElement("div");
        divEl.className = "alert alert-danger mt-2";
        divEl.id = "alert";
        divEl.innerHTML = "Credenciales Invalidas";

        const alertEl = document.getElementById("alert");
        if (alertEl) alertEl.remove();

        if (!userRegistered) {
            loginForm.append(divEl);
            return;
        }

        let errs = false;

        const formElements = loginForm.elements;

        for (let input of formElements) {
            // valor de campo
            const value = input.value;

            if (input.id === "inputUsername" && value !== userRegistered.email) errs = true;
            if (input.id === "inputPassword6" && value !== userRegistered.password) errs = true;
        }

        if (errs) {
            loginForm.append(divEl);
            return;
        }

        localStorage.setItem("loggedIn", "true");
        window.location.href = "lobby.html";
    }
}
