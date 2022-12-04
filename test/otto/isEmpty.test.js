/**
 * Package contains unit tests for isEmpty.js function
*/
import isEmpty from '../../src/isEmpty.js';

test('to pass: test expected truthy values', () => {
    expect(isEmpty(1000000000)).toBeTruthy();
    expect(isEmpty(-100000000)).toBeTruthy();
    expect(isEmpty(new Array())).toBeTruthy();
    expect(isEmpty(new Map())).toBeTruthy();
    expect(isEmpty("")).toBeTruthy();
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty({})).toBeTruthy();
});

test('to pass: test expected falsy values', () => {
    var m = new Map(Object.entries({1: '1'}, {2: '2'}, {3: '3'}))
    expect(isEmpty(m)).toBeFalsy()
    expect(isEmpty(m.clear())).toBeTruthy()
    expect(isEmpty(m.set("1", 1))).toBeFalsy()
    expect(isEmpty(Array.from(m))).toBeFalsy()
    expect(isEmpty({"1":"1"})).toBeFalsy()
    expect(isEmpty({"":""})).toBeFalsy()
    expect(isEmpty(["1"])).toBeFalsy()
    expect(isEmpty([""])).toBeFalsy()
    expect(isEmpty("abc")).toBeFalsy()
})

test('to pass: test if program handles malformed inputs', () => {
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(NaN)).toBeTruthy();
    expect(isEmpty(Infinity)).toBeTruthy();
    expect(isEmpty(true)).toBeTruthy();
    expect(isEmpty(false)).toBeTruthy();
    expect(isEmpty([Error])).toBeFalsy();
    expect(isEmpty({Error:Error})).toBeFalsy();
    expect(isEmpty(Error)).toBeTruthy();
})
