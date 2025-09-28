function vocales(cadena) {
    cadena = cadena.toLowerCase();
    cadena = cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let contador = 0;
    for (let letra of cadena) {
        if ("aeiouáéíóúü".includes(letra)) {
            contador++;
        }
    }
    return contador;
}

module.exports = vocales;