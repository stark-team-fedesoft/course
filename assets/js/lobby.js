
const btnSalir = document.getElementById('btnSalir');
const user = JSON.parse(localStorage.getItem('user'));
const fullname = document.getElementById('fullname');
const examen = document.getElementById('examen');
const btnExamen = document.getElementById('btnExamen');
const preguntas = [
    {
        id: 1,
        pregunta: '1. Una página con extensión htm o html comienza por html (entre signos mayor y menor)',
        respuestas : [ 'Verdadero', 'Falso'],
        respuestaCorrecta: 'Verdadero'
    },
    { 
        id: 2,
        pregunta: '2. El title se encuentra dentro del body en una página web',
        respuestas: [ 'Verdadero', 'Falso' ],
        respuestaCorrecta: 'Falso'
    },
    { 
        id: 3,
        pregunta: '3. ¿Qué entiende por HTML?',
        respuestas: ['Hyper Text Mask Language', 'Hyper Text Markup Language'],
        respuestaCorrecta: 'Hyper Text Markup Language'
    },
    { 
        id: 4,
        pregunta: '4. ¿Qué etiqueta utilizamos para definir el cuerpo del documento?',
        respuestas: [ 'background' , 'body'],
        respuestaCorrecta: 'body'
    },
    {
        id: 5,
        pregunta: '5. ¿Qué etiqueta utilizamos para insertar una línea horizontal?',
        respuestas: [ 'br', 'hr'],
        respuestaCorrecta: 'hr'
    }
];
const renderRespuestas = (pregunta) => {
    let impresion = '';
    pregunta.respuestas.forEach(respuesta => {
        impresion += `
        <div class="form-check">
        <input class="form-check-input" type="radio" name="${pregunta.id}" id="${pregunta.id}" value="${respuesta}">
        <label class="form-check-label" for="flexRadioDefault1">
        ${respuesta}
        </label>
        </div>
        `;
    });
    return impresion;
};

const evaluar = () => {
    let respuestasCorrectas = 0;
    const resUser = [];
    resUser.push(document.getElementById('1'));
    resUser.push(document.getElementById('2'));
    resUser.push(document.getElementById('3'));
    resUser.push(document.getElementById('4'));
    resUser.push(document.getElementById('5'));
    for (let i = 0; i < resUser.length; i++) {
        console.log(resUser[i].checked, preguntas[i].respuestaCorrecta);
        respuestasCorrectas += resUser[i].value === preguntas[i].respuestaCorrecta ? 1 : 0;
    }
    Swal.fire({
        title: 'Resultado!',
        text: '¡Obtuviste ' + respuestasCorrectas + ' de 5!',
        icon: 'info',
        confirmButtonText: 'Ok!'
    }).then((result) => {
        cargarExamen();
    });
};

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

const cargarExamen = () => {
    examen.innerHTML = '';
    preguntas.forEach(pregunta => {
        examen.innerHTML += `
        <h3>${pregunta.pregunta}</h3>
        <hr>
        ${renderRespuestas(pregunta)}
        <br>
        `;
    });
    examen.innerHTML += `
    <button onclick="evaluar()" class="btn btn-success"> Finaizar examen </button>
    `;
};

btnExamen.addEventListener('click', (evt) => {
    cargarExamen();
});

cargarExamen();