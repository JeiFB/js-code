let i = 1;
let suma = 0;

while(i<=100){
    if(i%3 === 0){
        alert(i)
        document.write(i+" ")
        suma =  suma + i;

    }
    i++;
}

document.write('la suma de los numeros primos es: '+ suma)

