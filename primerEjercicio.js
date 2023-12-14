let total;

let primerNumero = parseFloat(prompt('Ingresese el primer numero'));
let segundoNumero = parseFloat(prompt('ingrese el segundo numero'));
let tercerNumero = parseFloat(prompt("ingrese el tercer numero"));


if(primerNumero>0){
    total = segundoNumero * tercerNumero;
}else{
    total =  segundoNumero + tercerNumero;
}

alert("El valor es: " + total);
