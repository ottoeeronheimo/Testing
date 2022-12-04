/**
 * Package contains unit tests for slice.js function
*/
import slice from '../../src/slice.js';

test('to pass: basic array slicing works', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, 2)).toEqual([3, 4]);
    expect(slice(array, 0, 2)).toEqual([1, 2]);
    expect(slice(array, -2, 4)).toEqual([3, 4]);
    expect(slice(array, 2, 4)).toEqual([3, 4]);
    expect(slice(array, -2, -1)).toEqual([3]);
    expect(slice(array, 2, 3)).toEqual([3]);

    // Test with a bit longer string array
    var array2 = "a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a".split(" ")
    expect(slice(array2, 0, array2.length).length).toEqual(array2.length);
    expect(slice(array2, 0, 0).length).toEqual(0);
    expect(slice(array2, 2, 4).length).toEqual(2);
    expect(slice(array2, -6, array2.length).length).toEqual(6);

    expect(slice(array, array.length, array.length)).toEqual([]);
    expect(slice(array, 0, array.length)).toEqual(array);

    expect(slice(array, null, null)).toEqual([]);
    expect(slice(array, 0, 0)).toEqual([]);

    expect(slice([1], 0, 100000)).toEqual([1]);
    expect(slice([1], -1, 1)).toEqual([1]);
});

test('to pass: test malformed inputs', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, undefined)).toEqual(array);
    expect(slice(array, 0, undefined)).toEqual(array);
    expect(slice(array, undefined, undefined)).toEqual(array);

    expect(slice(array, null)).toEqual(array);
    expect(slice(array, 0, null)).toEqual([]);
    expect(slice(array, null, null)).toEqual([]);

    expect(slice(array, Error)).toEqual([]);
    expect(slice(array, 0, Error)).toEqual([]);
    expect(slice(array, Error, Error)).toEqual([]);

    expect(slice(undefined, 0, 2)).toEqual([]);
    expect(slice(undefined, 0, 2)).toEqual([]);
    expect(slice(undefined, undefined, undefined)).toEqual([]);

    expect(slice(null, 0, 2)).toEqual([]);
    expect(slice(null, 0, 2)).toEqual([]);
    expect(slice(null, null, null)).toEqual([]);


    expect(slice(Error, 0, 2)).toEqual([]);
    expect(slice(Error, 0, 0)).toEqual([]);
    expect(slice(Error, Error, Error)).toEqual([]);

});
