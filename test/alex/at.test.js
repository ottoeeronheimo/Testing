// Date: 26.11.2022
// Updated: 26.11.2022
// Author: Alex Malkki

import at from '../../src/at';



test('valid paths', () => {

    const obj = {
        a: [
            {
                b: [1,2,3],
                c: '6'
            }
        ],
        d: 9
    };

    const val = at(obj, ['a[0].b[2]', 'a[0].c', 'd']);
    const val_ = [3, '6', 9];

    expect(val).toEqual(val_);
});

test('invalid paths', () => {

    const obj = {
        a: [
            {
                b: [1,2,3],
                c: '6'
            }
        ],
        d: 9
    };

    const val = at(obj, ['a[0].b[3]', 'a[0].d', 'd']);
    const val_ = [undefined, undefined, 9];

    expect(val).toEqual(val_);
});

test('undefined path', () => {

    const obj = {
        a: [
            {
                b: [1,2,3],
                c: '6'
            }
        ],
        d: 9
    };

    const val = at(obj, []);
    const val1 = at(obj);
    const val_ = [];


    expect(val).toEqual(val_);
    expect(val1).toEqual(val_);
});

test('array and string as obj', () => {

    const arr = [ 1, 2, [ 1, 2 ], { a: 22 } ];

    const val = at(arr, '1', '2[2]', '3.a', 'length');
    const val_ = [2, undefined, 22, 4];

    const val1 = at('hello', ['0', '4']);
    const val1_ = ['h', 'o'];

    expect(val).toEqual(val_);
    expect(val1).toEqual(val1_);
});

test('undefined obj', () => {

    const val = at();
    const val1 = at(undefined, 'a');
    const val_ = [];

    expect(val).toEqual(val_);
    expect(val1).toEqual(val_);
});

test('invalid obj', () => {

    const val = at(10, '0');
    const val1 = at(true, '0');
    const val_ = [];

    expect(val).toEqual(val_);
    expect(val1).toEqual(val_);
});
