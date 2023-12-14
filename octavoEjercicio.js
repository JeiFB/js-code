let n=5;

let vecto = [];

alert("Digite 5 caracteres y estos se mostraran de forma inversa");
for(let i=1; i<=5;i++){
    vecto[i] =  prompt("caracter #"+i);
}

for(let i=1; i<=5;i++){
    document.write(vecto[i]+" ")
}

document.write("------------inverso: ")
for(let i=5; i>=1;i--){
    document.write(vecto[i]+" ")
}
