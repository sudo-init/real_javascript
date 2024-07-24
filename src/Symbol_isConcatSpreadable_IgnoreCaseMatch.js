/**
 * Symbol
 * - Symbol.isConcatSpreadable
 */

const numbers = [1, 2, 3, 4];
const chars = ['a', 'b', 'c,'];

console.log(numbers.concat(chars));

chars[Symbol.isConcatSpreadable] = false;
console.log(numbers.concat(chars));

const days = {
    length: 7,
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
};

console.log(numbers.concat(days));
days[Symbol.isConcatSpreadable] = true;
console.log(numbers.concat(days));



/**
 * Symbol.match
 */


class IgnoreCaseMatch {

    static new(value) {
        return new IgnoreCaseMatch(value);
    }

    constructor(value) {
        this.value = value;
    }

    // [Symbol.match](target) {
    //     return target.match(new RegExp(this.value, 'i'));
    // }
    // [Symbol.match](target) {
    //     return target.includes(this.value);
    // }
    [Symbol.match](other) {
        return other.toLowerCase().match(this.value.toLowerCase());
    }
}

console.log('-------------- Symbol.match --------------');
console.log('Hello'.match(new IgnoreCaseMatch('ell')));
console.log('Hello'.match(new IgnoreCaseMatch('ellO')));
console.log('Hello'.match(new IgnoreCaseMatch('hello')));
console.log('Hello'.match(new IgnoreCaseMatch('abc')));
console.log('Hello'.match(IgnoreCaseMatch.new('ell')));
console.log('Hello'.match(IgnoreCaseMatch.new('ellO')));
console.log('Hello'.match(IgnoreCaseMatch.new('hello')));
console.log('Hello'.match(IgnoreCaseMatch.new('abc')));