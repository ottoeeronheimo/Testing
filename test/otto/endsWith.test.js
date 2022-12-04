/**
 * Package contains unit tests for endsWith.js function
 * Currently dummy test case for preventing error (Your test suite must contain at least one test.)
*/
import endsWith from '../../src/endsWith';

test('to pass: test different string patterns', () => {
    expect(endsWith("test@test.com", "@test.com")).toBe(true);
    expect(endsWith("test@test.com", "@gmail.com")).toBe(false);
    expect(endsWith("abcdefg12345", "45")).toBe(true);
    expect(endsWith('', '')).toBe(true);
    expect(endsWith('  \n', '\n')).toBe(true);
    expect(endsWith('abc', 'abc')).toBeTruthy()
});

test('to pass: test string patterns with position', () => {

    expect(endsWith("test@test.com", "test", 4)).toBe(true);
    expect(endsWith("test@test.com", "@test", 9)).toBe(true);
    expect(endsWith("test@test.com", "@test.com", 9)).toBe(false);
    expect(endsWith("test@test.com", "@test")).toEqual(endsWith("test@test.com", "@test", "test@test.com".length))
    expect(endsWith('abc', 'b', 2)).toBe(true);
    expect(endsWith('abc', 'c', 3)).toBe(true);
    expect(endsWith('abc', 'a', 1)).toBe(true);
    expect(endsWith('abc', '', 0)).toBe(true);
})

test('to pass: handle errors and malformed inputs', () => {
    expect(endsWith('abc', 'b', null)).toBeFalsy()
    expect(endsWith('abc', 'b', undefined)).toBeFalsy()
    expect(endsWith('abc', 'b', NaN)).toBeFalsy()
    expect(endsWith(10, 0)).toBeFalsy()
    expect(endsWith('abc', 'b', -10000)).toBeFalsy()
    expect(endsWith('abc', '', -10000)).toBeTruthy()
    expect(endsWith('abc', '', Error)).toBeTruthy()
    expect(endsWith('abc', '', undefined)).toBeTruthy()
    expect(endsWith('abc', '', NaN)).toBeTruthy()
    expect(endsWith('abc', 'c', Infinity)).toBeTruthy()
    expect(endsWith('abc', 'abc', Infinity)).toBeTruthy()
})
