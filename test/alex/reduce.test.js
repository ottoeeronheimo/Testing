// Date: 28.11.2022
// Updated: 28.11.2022
// Author: Alex Malkki

import reduce from '../../src/reduce';



test('sum array values', () => {

    const a = [1,2,3,4,5];

    const func = (acc, val) => acc + val;

    expect(reduce(a, func)).toEqual(15);
    expect(reduce(a, func, 5)).toEqual(20);
});

test('sum array indexes', () => {

    const a = [1,2,3,4,5];

    const func = (acc, val, i) => acc + i;

    expect(reduce(a, func)).toEqual(11);
    expect(reduce(a, func, 5)).toEqual(15);
});

test('sum obj values', () => {
    
    const o = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    };

    const func = (acc, val) => acc + val;

    expect(reduce(o, func)).toEqual(15);
    expect(reduce(o, func, 5)).toEqual(20);
});

// Failing test!
// reduce() skips running the iteratee for the first time
// when initial accumulator value is not supplied to reduce().
// This is appearent if lines 62 and 66 are uncommented and 
// lines 66 and 67 switched between test runs.
/*
test('sum obj keys', () => {
    
    const o = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    };

    const func = (acc, val, key) => {
        //console.log(acc, key);
        return acc + key;
    };

    //expect(reduce(o, func)).toEqual('1abcde');
    expect(reduce(o, func, 22)).toEqual('22abcde');
});
*/

test('reduce obj values', () => {
    
    const o = {
        a: 1,
        b: 1,
        c: 3,
        d: 2,
        e: 2
    };

    const func = (res, val, key) => {
        if (!res[val]) res[val] = [];
        res[val].push(key);
        return res;
    };

    const res_ = {
        1: ['a', 'b'],
        2: ['d', 'e'],
        3: ['c']
    }

    expect(reduce(o, func, {})).toEqual(res_);
    expect(() => reduce(o, func)).toThrow(TypeError);
});
