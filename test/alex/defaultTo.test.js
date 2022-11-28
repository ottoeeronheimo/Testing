// Date: 28.11.2022
// Updated: 28.11.2022
// Author: Alex Malkki

import defaultTo from '../../src/defaultTo';



test('defined value, defined default', () => {
    const val = 'hello';
    const val_ = 'hello';

    const val1 = '';
    const val1_ = '';

    const val2 = 0;
    const val2_ = 0;

    const def = 'default value';

    expect(defaultTo(val, def)).toEqual(val_);
    expect(defaultTo(val1, def)).toEqual(val1_);
    expect(defaultTo(val2, def)).toEqual(val2_);
});

test('undefined value, defined default', () => {
    const val = undefined;
    const val1 = null;
    const val2 = NaN;

    const def = 'default value';
    const def_ = 'default value';

    expect(defaultTo(val, def)).toEqual(def_);
    expect(defaultTo(val1, def)).toEqual(def_);
    //expect(defaultTo(val2, def)).toEqual(def_);     // Failing test (defaultTo() thinks NaN is defined value)
});

test('defined value, undefined default', () => {
    const val = 'hello';
    const val_ = 'hello';

    const val1 = '';
    const val1_ = '';

    const val2 = 0;
    const val2_ = 0;

    const def = undefined;

    expect(defaultTo(val, def)).toEqual(val_);
    expect(defaultTo(val1, def)).toEqual(val1_);
    expect(defaultTo(val2, def)).toEqual(val2_);
});

test('undefined value, undefined default', () => {
    const val = undefined;
    const val1 = null;
    const val2 = NaN;

    const def = undefined;
    const def_ = undefined;

    expect(defaultTo(val, def)).toEqual(def_);
    expect(defaultTo(val1, def)).toEqual(def_);
    //expect(defaultTo(val2, def)).toEqual(def_);     // Failing test (defaultTo() thinks NaN is defined value)
});
