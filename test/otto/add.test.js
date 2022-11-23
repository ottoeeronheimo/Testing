import add from '../../src/add.js';

test('to pass: 2 + 2 = 4', () => {
    expect(add(2, 2)).toBe(4);
});

test('to pass: -2 +  = 0', () => {
    expect(add(-2, 2)).toBe(0);
});

test('to pass: 0 + 0 = 0', () => {
    expect(add(0, 0)).toBe(0);
});

test('to pass: -2 + -2 = -4', () => {
    expect(add(-2, -2)).toBe(-4);
});

test('to pass: Infinity + -Infinity = NaN', () => {
    expect(add(Infinity, -Infinity)).toBe(NaN);
});

test('to pass: text + 1 = text1', () => {
    expect(add("text", 1)).toEqual("text1");
});

test('to pass: null value is handled', () => {
    expect(add(null, 1)).toEqual(1);
});

test('to pass: undefined values are handled', () => {
    expect(add(undefined, undefined)).toEqual(0);
});

test('to pass: Error value is handled', () => {
    expect(add(Error, 1)).toEqual(NaN);
});
