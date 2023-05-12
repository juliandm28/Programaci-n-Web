
// 1
const nombre = prompt("Ingrese su nombre");
const edad = parseInt(prompt("Ingrese su edad"));
const edadProximoAno = edad + 1;
const mensaje = `Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edadProximoAno} años`;
document.getElementById("saludo").textContent = mensaje;


// 2
const figura = prompt("¿De qué figura quieres calcular el área? (triángulo, rectángulo o círculo)");
const resultadosElemento = document.getElementById("resultados");
if (figura === "triángulo") {
  const base = parseFloat(prompt("Ingresa la base del triángulo"));
  const altura = parseFloat(prompt("Ingresa la altura del triángulo"));
  const area = (base * altura) / 2;
  resultadosElemento.innerHTML = `El área del triángulo es: ${area}`;
} else if (figura === "rectángulo") {
  const base = parseFloat(prompt("Ingresa la base del rectángulo"));
  const altura = parseFloat(prompt("Ingresa la altura del rectángulo"));
  const area = base * altura;
  resultadosElemento.innerHTML = `El área del rectángulo es: ${area}`;
} else if (figura === "círculo") {
  const radio = parseFloat(prompt("Ingresa el radio del círculo"));
  const area = Math.PI * Math.pow(radio, 2);
  resultadosElemento.innerHTML = `El área del círculo es: ${area}`;
} else {
  resultadosElemento.innerHTML = "Lo siento, no puedo calcular el área de esa figura";
}


// 3
const numero = parseInt(prompt("Ingresa un número para crear lista diciendo si es par"));
const listaNumeros = document.getElementById("numeros");

for (let i = 1; i <= numero; i++) {
  const li = document.createElement("li");
  li.textContent = `${i} - es ${i % 2 === 0 ? "par" : "impar"}`;
  listaNumeros.appendChild(li);
}


// 4
const resultadoElemento = document.getElementById("resultado");
const numerop = parseInt(prompt("Ingresa un número entero mayor que 1 para ver si es primo"));
let esPrimo = true;
for (let i = 2; i <= numerop / 2; i++) {
  if (numerop % i === 0) {
    esPrimo = false;
    break;
  }
}
if (esPrimo) {
  resultadoElemento.textContent = `El número ${numerop} es primo`;
} else {
  resultadoElemento.textContent = `El número ${numerop} no es primo`;
}



// 5
const resultadoFactorial = document.getElementById("resultadof");
const numerof = parseInt(prompt("Ingresa un número entero mayor que 0 para hayar su factorial"));
let factorial = 1;

if (numerof > 0) {
  for (let i = 1; i <= numerof; i++) {
    factorial *= i;
  }
  resultadoFactorial.textContent = `El factorial de ${numerof} es ${factorial}`;
} else {
  resultadoFactorial.textConten = "El número debe ser mayor que cero";
}



// 6
let sumas = 0;
let contadors = 0;

while (sumas <= 50) {
  const numeros = parseFloat(prompt("Introduce un número para serie indeterminada: "));
  if (isNaN(numeros)) {
    alert("El valor introducido no es un número válido, inténtalo de nuevo.");
    continue;
  }
  sumas += numeros;
  contadors++;
}

const resultadoserie = document.getElementById("resultadoserie");
resultadoserie.textContent = `Total acumulado: ${sumas}, Número de elementos: ${contadors}`;


//7
// Creamos el primer array
const numerosarray = [2, 7, 10, 3, 8];

// Creamos los arrays pares e impares
const paresarray = [];
const imparesarray = [];

// Creamos la variable para imprimir las multiplicaciones
let multiplicacionesarray = "";

// Recorremos el primer array y multiplicamos por un número aleatorio entre 1 y 10
for (let i = 0; i < numerosarray.length; i++) {
  const numarray = numerosarray[i];
  const randomarray = parseFloat(prompt("Introduce un número del 1 al 10 para las multipicaciones"));
  const resultadoarray = numarray * randomarray;
  multiplicacionesarray += `${numarray} x ${randomarray} = ${resultadoarray} <br>`;

  // Separamos los números pares e impares en sus arrays correspondientes
  if (resultadoarray % 2 === 0) {
    paresarray.push(resultadoarray);
  } else {
    imparesarray.push(resultadoarray);
  }
}

// Imprimimos las multiplicaciones y los arrays de pares e impares
document.getElementById("multiplicacionesarray").innerHTML = multiplicacionesarray;
document.getElementById("paresarray").innerHTML = paresarray.join(", ");
document.getElementById("imparesarray").innerHTML = imparesarray.join(", ");


//8
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = prompt("Introduce tu número de DNI menor de 8 digitos:");
if (!dni || dni < 0 || dni.toString().length > 8) {
  document.getElementById("result").innerHTML = "El número de DNI introducido no es válido.";
} else {
  let letra = letras[dni % 23];
  document.getElementById("result").innerHTML = `La letra correspondiente al número de DNI ${dni} es: ${letra}`;
}



//9
const palabra = prompt("Ingrese una palabra"); // Definir la palabra a analizar
const vocales = ['a', 'e', 'i', 'o', 'u'];
let consonantes = 0;
let numVocales = 0;
let numConsonantes = 0;
for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i].toLowerCase(); // Convertir letra a minúscula para comparar con las vocales
    if (letra >= 'a' && letra <= 'z') { // Ignorar caracteres no alfabéticos
        if (vocales.includes(letra)) {
            numVocales++;
        } else {
            consonantes++;
            numConsonantes++;
        }
    }
}
const resultadopalabra = `La palabra "${palabra}" tiene ${numVocales} vocales, ${numConsonantes} consonantes y una longitud de ${palabra.length} caracteres.`;
document.getElementById("resultadopala").innerHTML = resultadopalabra;


//10
const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
const colorUsuario = prompt("Introduce un color:").toLowerCase();

if (colores.includes(colorUsuario)) {
  document.getElementById("resultadocolores").textContent = `El color ${colorUsuario} está en el array.`;
} else {
  document.getElementById("resultadocolores").textContent = `El color ${colorUsuario} no está en el array.`;
}

