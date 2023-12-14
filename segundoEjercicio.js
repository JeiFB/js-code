let primerNumero = parseInt(prompt("ingrese primer numero"));
let segundoNumero = parseInt(prompt("ingrese segundo numero"));
let tercerNumero = parseInt(prompt("ingerese tercer numero"));

if(primerNumero === segundoNumero + tercerNumero){
    alert(primerNumero + " coincide con la suma de " + segundoNumero + " y " + tercerNumero + " que es " + (segundoNumero + tercerNumero));
}else{
    if(segundoNumero=== primerNumero + tercerNumero){
        alert(segundoNumero + " coincide con la suma de " + primerNumero + " y " + tercerNumero + " que es " + (primerNumero + tercerNumero));
    }else{
        if(tercerNumero === primerNumero + segundoNumero){
            alert(tercerNumero + " coincide con la suma de " + primerNumero + " y " + segundoNumero + " que es " + (primerNumero + segundoNumero));
        }else{
            alert("Niguno coincide")
        }
    }
}