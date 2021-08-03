// JavaScript Document
$(document).ready(function() {
    var x = "x"
    var o = "o"
    var count = 0;
    var o_win = 0;
    var x_win = 0;

    $('#game li').click(function() {
        if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o')) {
            alert('0 Ganó el juego')
            $("#game li").text("+");
            $("#game li").removeClass('disable');
            $("#game li").removeClass('o');
            $("#game li").removeClass('x');
            $("#game li").removeClass('btn-primary');
            $("#game li").removeClass('btn-info');

        } else if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x')) {
            alert('X ganó el juego');
            $("#game li").text("+");
            $("#game li").removeClass('disable');
            $("#game li").removeClass('o');
            $("#game li").removeClass('x');
            $("#game li").removeClass('btn-primary');
            $("#game li").removeClass('btn-info');

        } else if (count == 9) {
            alert('Empate');
            $("#game li").text("+");
            $("#game li").removeClass('disable');
            $("#game li").removeClass('o');
            $("#game li").removeClass('x');
            $("#game li").removeClass('btn-primary');
            $("#game li").removeClass('btn-info');
            count = 0;

        } else if ($(this).hasClass('disable')) {
            alert('Ya está seleccionado');

        } else if (count%2 == 0) {
            count++;
            $(this).text(o);
            $(this).addClass('disable o btn-primary');

            if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o')) {
                alert('O ganó');
                count = 0;
                o_win++;
                $('#o_win').text(o_win);
            }
        } else {
            count++;
            $(this).text(x);
            $(this).addClass('disable x btn-info');

            if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x')) {
                alert('X ganó');
                count = 0;
                x_win++;
                $('#x_win').text(x_win);
            }

        }
    
    });

    $("#reset").click(function () {
        $("#game li").text("+");
        $("#game li").removeClass('disable');
        $("#game li").removeClass('o');
        $("#game li").removeClass('x');
        $("#game li").removeClass('btn-primary');
        $("#game li").removeClass('btn-info');
        count = 0;
    });
});

const carouselItems = document.getElementById('carousel-inner');
const evaluate      = document.getElementById('evaluate');
const tot           = document.getElementById('total');
const totModal      = document.getElementById('score-modal');
const doTest        = document.getElementById('do-test');

// verificar calificación
const calsStr = localStorage.getItem('califications');
const calObj  = JSON.parse( calsStr );
const cals    = calObj.califications;

const logicCal = cals.find( c => c.name === 'Lógica y Algoritmia');
let total = 0;

if( logicCal ) {
    total = 100;
}

tot.innerHTML = total;

const setAnswer = ( questionId=0, answerId=' ' ) => {
    question = test.find( q => q.id === questionId );
    question.userAnswer = answerId;
}

const setCalification = () => {
    const calificationsStr = localStorage.getItem('califications');
    let calificacationsObj = JSON.parse( calificationsStr );
    calificacationsObj.califications.push({
        name: 'Lógica y Algoritmia',
    });

    localStorage.setItem( 'califications', JSON.stringify(calificacationsObj) );
}

let test = [
    {
        id : 1,
        question: 'Instrucción que permite almacenar un valor en una variable.',
        answers: [
            { id :'a', value : 'Leer' },
            { id :'b', value : 'Asignar' },
            { id :'c', value : 'Escribir' },
            { id :'d', value : 'Si entonces' },
        ],
        correct : 'b',
        userAnswer : ' ',
    },
    {
        id : 2,
        question: 'Un compilador es:',
        answers: [
            { id: 'a', value : 'El que permite traducir un programa escrito en un lenguaje de programación a lenguaje máquina' },
            { id: 'b', value : 'Un lenguaje de alto nivel' },
            { id: 'c', value : 'Una instruccion' },
            { id: 'd', value : 'Una directiva de pre procesamiento' },
        ],
        correct: 'a',
        userAnswer : ' ',
    },
    {
        id : 3,
        question: 'Las etapas que deben seguirse en la construcción de un programa son:',
        answers: [
            { id: 'a', value : 'Análisis, algoritmo, diagrama de flujo, seudocódigo' },
            { id: 'b', value : 'Análisis, seudocódigo, prueba de escritorio, implementación (codificar en un lenguaje de programación).' },
            { id: 'c', value : 'Análisis, algoritmo, prueba de escritorio, implementación (codificar en un lenguaje de programación), prueba, instalación y uso del aplicativo.' },
            { id: 'd', value : 'Análisis, algoritmo, diagrama de flujo, seudocódigo, prueba de escritorio, implementación (codificar en un lenguaje de programación), prueba, instalación y uso del aplicativo.' },
        ],
        correct: 'd',
        userAnswer : ' ',
    },
    {
        id : 4,
        question: 'El diagrama de flujo es la representación grafica de un algoritmo, donde se visualiza el flujo de los datos y las operaciones (procesos) de un programa. Se caracteriza por:',
        answers: [
            { id: 'a', value : 'Que debe ser construido por herramientas muy técnicas' },
            { id: 'b', value : 'Utilizar formas geométricas elementales' },
            { id: 'c', value : 'Su sencillez, claridad, uso de normas y símbolos, flexibilidad.' },
            { id: 'd', value : 'Requerir un buen análisis del problema' },
        ],
        correct: 'c',
        userAnswer : ' ',
    },
    {
        id : 5,
        question: 'En caso de presentarse una falla de sintaxis, en el proceso de programación, se procede a:',
        answers: [
            { id : 'a', value : 'Ignorar los errores y ejecutar el programa.' },
            { id : 'b', value : 'Comprender el mensaje de error que reporta el ambiente de programación, examinar el código del programa para identificar en cuál instrucción se encuentra la falla, corregir la falla, probar el programa de nuevo.' },
            { id : 'c', value : 'Examinar el código del programa para identificar en cuál instrucción se encuentra la falla, Comprender el mensaje de error que reporta el ambiente de programación.' },
            { id : 'd', value : 'Examinar el código del programa para identificar en cuál instrucción se encuentra la falla, corregir la falla.' },
        ],
        correct: 'b',
        userAnswer : ' ',
    },
];

test.forEach( (answer) => {
    const div = document.createElement('div');
    
    if( answer.id === 1 ) div.className = "carousel-item active text-dark px-5 m-5";
    else div.className = "carousel-item text-dark px-5 m-5";

    div.setAttribute('data-bs-interval', '10000000000000000');

    const lb = document.createElement('br');

    const title     = document.createElement('label');
    title.innerHTML = `${answer.question}`;
    title.after(lb);
    title.after(lb);

    const anss = document.createElement('div');
    anss.className = "mt-2";
    answer.answers.forEach( (an) => {
        const div1 = document.createElement('div');
        div1.className =  "d-block";

        const input = document.createElement('input');
        input.type = 'radio';
        input.id    = `answer-${answer.id}-${an.id}`;
        input.value = `${an.value}`;
        input.name  = `answer-${answer.id}`;
        
        input.onclick = function() { setAnswer(answer.id, an.id) }

        const label = document.createElement('label');
        label.setAttribute('for', `answer-${answer.id}-${an.id}`);
        label.innerHTML = `${an.value}<br/>`;

        div1.append(input);
        div1.append(label);
        
        anss.append(div1);
    });

    div.append( title );
    div.append( anss );

    carouselItems.append( div );
});

evaluate.onclick = function() {
    let calif = 0;

    test.forEach( (answer) => {
        if( answer.correct === answer.userAnswer ) calif = calif + 20;
    });
    
    total = calif;
    tot.innerHTML = total;
    totModal.innerHTML = total;

    $('#testModal').modal('toggle');

    if( total !== 100 ) $('#scoreModal').modal('toggle');
    else if( total === 100) {
        $('#goodModal').modal('toggle');
        setCalification();
    }

    
}

doTest.onclick = function() {
    $('#scoreModal').modal('toggle');
    $('#testModal').modal('toggle');
}


