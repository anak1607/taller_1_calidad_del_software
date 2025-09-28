function calcularPuntaje(correctas,incorrectas){
    let puntaje = correctas *10 - incorrectas *2;
    if (incorrectas === 0 && correctas >0){
        puntaje +=5;
    }
    if (puntaje <0){
        puntaje=0;
    }
    return puntaje;
}

module.exports = calcularPuntaje;
