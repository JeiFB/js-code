let hora, notacionDoce;
alert('digite la hora en militar');
hora =  parseInt(prompt())

if(hora<=12){
    if(hora === 12){
        document.write(hora, 'p.m')
    }else{
        document.write(hora, 'a.m')
    }
}else{
    notacionDoce = hora-12
    if(hora===24){
        document.write(notacionDoce, 'a.m')
    }else{
        document.write(notacionDoce, 'p.m')
    }
}

