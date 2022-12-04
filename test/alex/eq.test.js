// Date: 28.11.2022
// Updated: 28.11.2022
// Author: Alex Malkki

import eq from '../../src/eq';



test('unequal types, unequal values, unequal identities', () => {

    const a = 'hello';
    const b = 1;

    expect(eq(a, b)).toBe(false);
    expect(eq(b, a)).toBe(false);
});

test('equal types, unequal values, unequal identities', () => {

    const a = {greeting: 'hi'};
    const b = {greeting: 'Hi'};

    const c = 1;
    const d = 2;

    const e = true;
    const f = false;

    expect(eq(a, b)).toBe(false);
    expect(eq(b, a)).toBe(false);

    expect(eq(c, d)).toBe(false);
    expect(eq(d, c)).toBe(false);

    expect(eq(e, f)).toBe(false);
    expect(eq(f, e)).toBe(false);
});

test('equal types, equal values, unequal identities', () => {

    const a = {greeting: 'hi'};
    const b = {greeting: 'hi'};

    const c = +0;
    const d = -0;

    const e = true;
    const f = true;

    expect(eq(a, b)).toBe(false);
    expect(eq(b, a)).toBe(false);

    expect(eq(c, d)).toBe(true);
    expect(eq(d, c)).toBe(true);

    expect(eq(e, f)).toBe(true);
    expect(eq(f, e)).toBe(true);
});

test('equal types, equal values, equal identities', () => {

    const a = 1;
    const b = true;
    const c = 'hello';
    const d = {int: 1};
    const e = undefined;
    const f = null;
    const g = NaN;

    expect(eq(a, a)).toBe(true);
    expect(eq(b, b)).toBe(true);
    expect(eq(c, c)).toBe(true);
    expect(eq(d, d)).toBe(true);
    expect(eq(e, e)).toBe(true);
    expect(eq(f, f)).toBe(true);
    expect(eq(g, g)).toBe(true);
});


// Failing test!
// eq() does type casting which is against SameValueZero definition.
test('unequal types, equal values, unequal identities', () => {

    const a = '';
    const b = 0;

    const c = undefined;
    const d = null;

    expect(eq(a, b)).toBe(false);
    expect(eq(b, a)).toBe(false);

    expect(eq(c, d)).toBe(false);
    expect(eq(d, c)).toBe(false);
});
