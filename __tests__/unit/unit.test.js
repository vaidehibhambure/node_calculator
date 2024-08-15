import percentage from '../../src/modules/calculation/util/percentage';
import gcd from '../../src/modules/calculation/util/gcd';
import exp from '../../src/modules/calculation/util/exp';

//const { gcd, exp, percentage } = require('../modules/math');



test('GCD of 12 and 8 is 4', () => {
    expect(gcd(12, 8)).toBe(4);
});

test('exp(2, 3) is 8', () => {
    expect(exp(2, 3)).toBe(8);
});

test('20 is 20% of 100', () => {
    expect(percentage(20, 100)).toBe(20);
});