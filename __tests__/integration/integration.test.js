const { numberCruncher } = require('../modules/numberCruncher');

test('numberCruncher crunches numbers correctly', () => {
    const result = numberCruncher(100);
    expect(result).toBe(42); // Assuming the expected result is 42
});