import numberCruncher from '../../src/modules/calculation/numberCruncher';

//const { numberCruncher } = require('../modules/numberCruncher');

test('should add two numbers', () => {
    const result = numberCruncher({ numOne: '5', numTwo: '3', operator: 'add' });
    expect(result).toBe(8);
});

test('should subtract two numbers', () => {
    const result = numberCruncher({ numOne: '5', numTwo: '3', operator: 'subtract' });
    expect(result).toBe(2);
});

test('should multiply two numbers', () => {
    const result = numberCruncher({ numOne: '5', numTwo: '3', operator: 'multiply' });
    expect(result).toBe(15);
});
test('should divide two numbers', () => {
    const result = numberCruncher({ numOne: '6', numTwo: '3', operator: 'divide' });
    expect(result).toBe(2);
});
test('should percentage two numbers', () => {
    const result = numberCruncher({ numOne: '50', numTwo: '100', operator: 'percentage' });
    expect(result).toBe(50);
});