const calcularPuntaje = require ('./score');

test('1.    3 correctas y 2 incorrectas → 26 puntos',()=>{
        expect(calcularPuntaje(3,2)).toBe(26);
});
test('2.	Jugador con todas correctas → bonus aplicado.',()=>{
        expect(calcularPuntaje(5,0)).toBe(55);
    });
test('3.	Jugador con todas incorrectas → nunca menor que 0',()=>{
        expect(calcularPuntaje(0,5)).toBe(0);
    });
test('4.	Jugador sin respuestas → puntaje 0',()=>{
        expect(calcularPuntaje(0,0)).toBe(0);
    });
test('5.	Caso borde: 1 correcta y nada más.',()=>{
        expect(calcularPuntaje(0,0)).toBe(0);
    });

