const celsiusAFarenheit = require('./temperatura');

test('•	0°C → 32°F', () => {
    expect(celsiusAFarenheit(0)).toBe(32);
});
test('•	100°C → 212°F', () => {
    expect(celsiusAFarenheit(100)).toBe(212);
});
test('•	-40°C → -40°F', () => {
    expect(celsiusAFarenheit(-40)).toBe(-40);
});