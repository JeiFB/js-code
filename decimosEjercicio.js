//aqui aplique conceptos un poquito mas avanzados, como el new que es para crear una instancia, template string para mezclar texto con variables de forma facil
let sumaFila, sumaColumna;
let matriz = new Array(3); 

// Crear la matriz
for (let i = 0; i < 3; i++) {
  matriz[i] = new Array(4);
}

// Cargar la matriz con valores numéricos enteros
for (let fila = 0; fila < 3; fila++) {
  for (let columna = 0; columna < 4; columna++) {
    matriz[fila][columna] = parseInt(
      prompt(
        `Ingrese un valor para la posición [${fila + 1},${columna + 1}]:`
      )
    );
  }
}

// Mostrar la matriz en la pantalla
for (let fila = 0; fila < 3; fila++) {
  let filaString = "";
  for (let columna = 0; columna < 4; columna++) {
    filaString += matriz[fila][columna] + " ";
  }
  document.write(filaString + "<br>");
}

// Sumar los elementos de cada fila y mostrar los resultados
for (let fila = 0; fila < 3; fila++) {
  sumaFila = 0;
  for (let columna = 0; columna < 4; columna++) {
    sumaFila += matriz[fila][columna];
  }
  document.write(
    `La suma de los elementos de la fila ${fila + 1} es: ${sumaFila}<br>`
  );
}

// Sumar los elementos de cada columna y mostrar los resultados
for (let columna = 0; columna < 4; columna++) {
  sumaColumna = 0;
  for (let fila = 0; fila < 3; fila++) {
    sumaColumna += matriz[fila][columna];
  }
  document.write(
    `La suma de los elementos de la columna ${columna + 1} es: ${sumaColumna}<br>`
  );
}