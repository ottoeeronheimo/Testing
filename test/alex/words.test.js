// Date: 23.11.2022
// Updated: 23.11.2022
// Author: Alex Malkki

import words from '../../src/words';



test('string with undefined pattern', () => {
    const ascii = 'fred, barney, & pebbles';
    const ascii_ = ['fred', 'barney', 'pebbles'];

    const uni = 'frëd, bärnëy, & pëbblës';
    const uni_ = ['frëd', 'bärnëy', 'pëbblës'];

    const empty = '';
    const empty_ = [];
    
    expect(words(ascii)).toEqual(ascii_);
    expect(words(uni)).toEqual(uni_);
    expect(words(empty)).toEqual(empty_);

});


test('string with defined pattern', () => {
    const ascii = 'fred, barney, & pebbles';
    const ascii_ = ['fred', 'barney', '&', 'pebbles'];

    const uni = 'frëd, bärnëy, & pëbblës';
    const uni_ = ['frëd', 'bärnëy', '&', 'pëbblës'];

    const empty = '';
    const empty_ = [];

    const matchingPattern = /[^, ]+/g;
    const nonMatchingPattern = /[1-9]+/g;
    
    expect(words(ascii, matchingPattern)).toEqual(ascii_);
    expect(words(uni, matchingPattern)).toEqual(uni_);
    expect(words(empty, matchingPattern)).toEqual(empty_);

    expect(words(ascii, nonMatchingPattern)).toEqual(empty_);
    expect(words(uni, nonMatchingPattern)).toEqual(empty_);
    expect(words(empty, nonMatchingPattern)).toEqual(empty_);
});


test('numeric string with undefined pattern', () => {
    const i = '369';
    const f = '3.14';
    const s = Number.parseFloat(i) + Number.parseFloat(f);

    const calc = i + ' + ' + f + ' = ' + s;
    const calc_ = ['369', '3', '14', '372', '14'];

    expect(words(calc)).toEqual(calc_);
});


test('numeric string with defined pattern', () => {
    const i = '369';
    const f = '3.14';
    const s = Number.parseFloat(i) + Number.parseFloat(f);

    const calc = i + ' + ' + f + ' = ' + s;
    const calc_ = ['369', '+', '3.14', '=', '372.14'];

    const empty_ = [];

    const matchingPattern = /[^ ]+/g;
    const nonMatchingPattern = /[a-z]+/g;

    expect(words(calc, matchingPattern)).toEqual(calc_);
    expect(words(calc, nonMatchingPattern)).toEqual(empty_);
});
