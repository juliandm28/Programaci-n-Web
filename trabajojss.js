function saludar() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const nextYearAge = parseInt(age) + 1;
    console.log(`Hola ${name}, tienes ${age} años y el año que viene tendrás ${nextYearAge} años`);
  }

  // Punto 2: Calcular área de figuras geométricas
  function calcularArea() {
    const figure = document.getElementById('figure').value;
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const radius = parseFloat(document.getElementById('radius').value);

    let area;
    if (figure === 'triangle') {
      area = base * height / 2;
    } else if (figure === 'rectangle') {
      area = base * height;
    } else if (figure === 'circle') {
      area = Math.PI * Math.pow(radius, 2);
    }

    console.log(`El área de la figura seleccionada es: ${area}`);
  }

  // Punto 3: Imprimir números pares e impares
  function imprimirParesImpares() {
    const number = parseInt(document.getElementById('number').value);

    for (let i = 1; i <= number; i++) {
      if (i % 2 === 0) {
        console.log(`${i} - es par`);
      } else {
        console.log(`${i} - es impar`);
      }
    }
  }

  // Punto 4: Verificar si un número es primo
  function verificarPrimo() {
    const number = parseInt(document.getElementById('primeNumber').value);

    let isPrime = true;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} es un número primo`);
    } else {
      console.log(`${number} no es un número primo`);
    }
  }

  // Punto 5: Calcular factorial
  function calcularFactorial() {
    const number = parseInt(document.getElementById('factorialNumber').value);

    let factorial = 1;
    for (let i = number; i >= 1; i--) {
      factorial *= i;
    }

    console.log(`El factorial de ${number} es: ${factorial}`);
  }

  // Punto 6: Sumar números hasta llegar a 50
  function sumarNumeros() {
    let sum = 0;
    let count = 0;

    while (sum <= 50) {
      const number = parseInt(document.getElementById('sumNumber').value);
      sum += number;
      count++;

      if (sum > 50) {
        break;
      }
    }

    console.log(`Total acumulado: ${sum}`);
    console.log(`Cantidad de números introducidos: ${count}`);
  }

  // Punto 7: Multiplicar números y clasificar pares e impares
  function multiplicarNumeros() {
    const numbers = [5, 8, 12, 3, 9]; // Array con 5 números

    const pares = [];
    const impares = [];

    numbers.forEach(number => {
      const random = Math.floor(Math.random() * 10) + 1;
      const result = number * random;

      console.log(`${number} x ${random} = ${result}`);

      if (result % 2 === 0) {
        pares.push(result);
      } else {
        impares.push(result);
      }
    });

    console.log('Números pares:', pares);
    console.log('Números impares:', impares);
  }

  // Punto 8: Calcular letra de DNI
  function calcularLetraDNI() {
    const dniNumber = parseInt(document.getElementById('dniNumber').value);

    if (dniNumber > 0 && dniNumber < 100000000) {
      const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
      const posicion = dniNumber % 23;
      const letra = letras[posicion];

      console.log(`La letra correspondiente al DNI ${dniNumber} es: ${letra}`);
    } else {
      console.log('El número de DNI ingresado es inválido');
    }
  }

  // Punto 9: Contar consonantes, vocales y longitud de una palabra
  function contarCaracteres() {
    const word = document.getElementById('word').value.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let consonants = 0;
    let vowelsCount = 0;

    for (let i = 0; i < word.length; i++) {
      const character = word[i];
      if (vowels.includes(character)) {
        vowelsCount++;
      } else if (character !== ' ') {
        consonants++;
      }
    }

    const length = word.length;

    console.log(`Palabra: ${word}`);
    console.log(`Longitud: ${length}`);
    console.log(`Consonantes: ${consonants}`);
    console.log(`Vocales: ${vowelsCount}`);
  }

  // Punto 10: Buscar color en un array
  function buscarColor() {
    const colors = ['azul', 'amarillo', 'rojo', 'verde', 'rosa'];
    const color = document.getElementById('color').value.toLowerCase();

    if (colors.includes(color)) {
      console.log(`El color ${color} se encuentra en el array`);
    } else {
      console.log(`El color ${color} no se encuentra en el array`);
    }
  }