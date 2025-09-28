function promedio(notas){
if (!Array.isArray(notas) || notas.length === 0) {
    return 0; // Retorna 0 si la entrada no es un array o está vacío
}
let suma = notas.reduce((acum, nota) => acum + nota, 0);
return suma / notas.length;
}
module.exports = promedio;

