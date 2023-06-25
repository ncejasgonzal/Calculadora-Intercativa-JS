console.log("estas on-line");

// Array para almacenar el historial de operaciones
const historialOperaciones = [];
// Funciones para realizar operaciones
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

function multiplicacion(a, b) {
    return a * b;
}

function porcentaje(a, b) {
    return (a * b) / 100;
}

function realizarOperacion(operacion) {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));

    let resultado;

    switch (operacion) {
        case 'suma':
            resultado = suma(num1, num2);
            break;
        case 'resta':
            resultado = resta(num1, num2);
            break;
        case 'division':
            resultado = division(num1, num2);
            break;
        case 'multiplicacion':
            resultado = multiplicacion(num1, num2);
            break;
        case 'porcentaje':
            resultado = porcentaje(num1, num2);
            break;
        default:
            alert("Operación no válida");
            return;
    }

    const operacionRealizada = {
        numero1: num1,
        numero2: num2,
        operacion: operacion,
        resultado: resultado
    };
// Agregar la operación al historial
    historialOperaciones.push(operacionRealizada); 
// Mostrar el resultado
    alert("El resultado es: " + resultado);
}

// Función para mostrar el historial filtrado en la consola
function mostrarHistorialFiltrado() {
    let filtro = document.getElementById("filtro-operacion").value;
    let resultadosFiltrados = [];

    if (filtro === "todos") {
        resultadosFiltrados = historialOperaciones;
    } else {
        resultadosFiltrados = historialOperaciones.filter(function (item) {
            return item.operacion === filtro;
        });
    }

    console.log("Historial de operaciones (" + filtro + "):");
    if (resultadosFiltrados.length > 0) {
        resultadosFiltrados.forEach(function (item) {
            console.log(item.numero1 + " " + item.operacion + " " + item.numero2 + " = " + item.resultado);
        });
    } else {
        console.log("No se encontraron operaciones de " + filtro);
    }
}

/*En el código JavaScript, hemos declarado la variable historialOperaciones como un array vacío.Esta variable se utilizará para almacenar el historial de operaciones realizadas.

    Luego, hemos creado las funciones realizarOperacion(tipoOperacion), suma(numero1, numero2), resta(numero1, numero2), y similares, para realizar las operaciones correspondientes.En estas funciones, utilizamos prompt() para capturar los números ingresados por el usuario, realizamos la operación correspondiente y mostramos el resultado utilizando alert().También guardamos la operación realizada en el historial mediante la creación de un objeto con los números, la operación y el resultado, y lo agregamos al array historialOperaciones utilizando el método push().

Por último, tenemos la función mostrarHistorialFiltrado() que se activa al hacer clic en el botón correspondiente.Esta función obtiene el valor del select de filtrado y realiza una filtración del historial de operaciones.Si se selecciona "todos", se asigna el historial completo al array resultadosFiltrados.De lo contrario, se utiliza el método filter() para obtener solo las operaciones que coinciden con el tipo de operación seleccionado.Luego, se muestra el historial filtrado en la consola utilizando console.log().

Espero que esta explicación detallada te ayude a comprender mejor el código que hemos desarrollado.Si tienes alguna otra pregunta, no dudes en hacerla.*/





