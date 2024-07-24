/**
 * Symbol
 * - 사용자 정의 심볼 메서드
 */


const sym_reverse = Symbol('');
Array.prototype[sym_reverse] = function () {
    return this.slice().reverse();
};

Array.prototype.sym_reverse = function () {
    return 'Hello';
};

const numbers = [1, 2, 3, 4, 5];

console.log(numbers[sym_reverse]());
console.log(numbers.sym_reverse());
console.log(numbers[sym_reverse]());

