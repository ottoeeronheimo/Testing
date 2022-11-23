import add from '../../src/add.js';

test('to pass: add 2 + 2', () => {
    expect(add(2, 2)).toBe(4);
});

test('to pass: add -2 + 2', () => {
    expect(add(-2, 2)).toBe(0);
});

test('to pass: add 0 + 0', () => {
    expect(add(0, 0)).toBe(0);
});

test('to pass: add -2 + -2', () => {
    expect(add(-2, -2)).toBe(-4);
});
