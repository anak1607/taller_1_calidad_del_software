function palidromo(cadena){
    if (typeof cadena !== 'string') return "False";
    if (!cadena || cadena.trim().length === 0) return "False";
    const cadenaLimpia = cadena .replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    return cadenaLimpia === cadenaInvertida;
}
module.exports = palidromo;