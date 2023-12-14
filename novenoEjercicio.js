let c, i, nota, aux, aux2, suma, resultado, v=[];

aux=1000;
aux2 =-1;
i=1;
suma=0;

//leer y mostrar datos
while (i<=5){
    nota = parseFloat(prompt("Ingrese la nota #"+i))
    if((nota<0) || (nota>10)){
        alert("Digite una nota valida");
    }else{
        v[i]=nota;
        i++;
    }
}

for(let i=1; i<=5;i++){
    document.write('Las nota#'+i+" es "+ v[i]+"</br>");
}

//promedio
for(let i=1; i<=5;i++){
    suma = parseFloat(suma + v[i]);
}

//nota menor y nota mayor;

for(i=1; i<=5;i++){
    if(aux > v[i])
        aux = v[i];
    if(aux2 < v[i])
        aux2 = v[i];
}

resultado = parseFloat(suma/5);

document.write("El promedio es: "+resultado+" ");
document.write("La nota menor es: "+ aux + " ");
document.write("La nota mayor es: "+ aux2+ " ");
