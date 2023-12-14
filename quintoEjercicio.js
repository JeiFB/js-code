let i = 50, k=0, aux=0;

while(i<=200){
    if((i%2)===0){
        aux = k;
        k = k + i;
        document.write(aux + " + " + i + " = " + k + " </br>");
    }
    i = i + 1;
}