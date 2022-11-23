/**
 * Package contains unit tests for clamp.js function
 * Example of desired behavior from https://css-tricks.com/snippets/sass/clamping-number/
    $clamp: clamp(42, $min: 0, $max: 1337);    // 42
    $clamp: clamp(42, $min: 1337, $max: 9000); // 1337
    $clamp: clamp(42, $min: 0, $max: 1);       // 1
*/
import clamp from '../../src/clamp.js';

// Test case from clamp.js file
test('to pass: clamp(-10, -5, 5)= -5', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
});

// test zero within zero boundaries
test('to pass: clamp(0, 0, 0) = 0', () => {
    expect(clamp(0, 0, 0)).toBe(0);
});

// Test negative number in positive boundaries
test('to pass: clamp(100, 5, 10) = 10', () => {
    expect(clamp(-100, 5, 10)).toBe(5);
});

// Test positive number in same but bigger boundaries
test('to pass: clamp(5, 10, 10) = 10', () => {
    expect(clamp(5, 10, 10)).toBe(10);
});

// Test positive number in same but smaller boundaries
test('to pass: clamp(20, 10, 10) = 10', () => {
    expect(clamp(20, 10, 10)).toBe(10);
});

// Test handling error
test('to pass: clamp(Error, 10, 10) = 10', () => {
    expect(clamp(Error, 10, 10)).toBe(NaN);
});

// Test clamp inside negative boundaries
test('to pass: clamp(-7,-5, -10) = -7', () => {
    expect(clamp(-7,-5, -10)).toBe(-7);
});

/**
 * FAILING TEST CASES
*/
/*
// Test case from clamp.js file
test('to pass: clamp(10, -5, 5)= 5', () => {
    expect(clamp(10, -5, 5)).toBe(5);
});

// Test positive number in positive boundaries
test('to pass: clamp(100, 5, 10) = 10', () => {
    expect(clamp(100, 5, 10)).toBe(10);
});

// Test handling NaN type
test('to pass: clamp(20, NaN, 10) = 10', () => {
    expect(clamp(20, NaN, 10)).toBe(10);
});

// Test clamp inside positive boundaries
test('to pass: clamp(7,5, 10) = 7', () => {
    expect(clamp(7,5, 10)).toBe(7);
});

// Test clamp inside negative boundaries with bigger numbers
test('to pass: clamp(-50,-100, -10) = -50', () => {
    expect(clamp(-50,-100, -10)).toBe(-50);
});

// Test clamp inside boundary from 0 to 100
test('to pass: clamp(40,0, 100) = 40', () => {
    expect(clamp(40,0, 100)).toBe(40);
});

// Test clamp inside negative and positive boundaries
test('to pass: clamp(0,-5, 5) = 0', () => {
    expect(clamp(0,-5, 5)).toBe(0);
});
*/
