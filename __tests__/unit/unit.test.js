const { gcd, exp, percentage } = require('../modules/math');

test('GCD of 12 and 8 is 4', () => {
    expect(gcd(12, 8)).toBe(4);
});

test('exp(2, 3) is 8', () => {
    expect(exp(2, 3)).toBe(8);
});

test('20% of 100 is 20', () => {
    expect(percentage(100, 20)).toBe(20);
});