const vocales = require('./vocales');
test ('•	"hola" → 2',() => {
    expect(vocales("hola")).toBe(2);
});
test ('•	"rhythm" → 0',() => {
    expect(vocales("rhythm")).toBe(0);
});
test ('•	"Educación" → 5 ',() => {
    expect(vocales("Educación")).toBe(5);
});