const palidromo = require('./palidromo');
test ("oso->True", () => {
    expect(palidromo("oso")).toBe(true);
});
test ("casa->False", () => {
    expect(palidromo("casa")).toBe(false);
});
test ("", () => {
    expect(palidromo("True")).toBe(false);
});
test ("Ana", () => {
    expect(palidromo("Ana")).toBe(true);
});