// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let factorial = 1;
let i = 1;

while (true) {
    factorial *= i;
  
    if (i === 10) {
        break;
    }
  
    i++;
}

console.log("El factorial de 10 es: " + factorial);
