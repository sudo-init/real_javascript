/**
 * Symbol
 * - Symbol.species
 * - Symbol.unscopables => 특정 구문에서 속성을 숨기고자 할 때, 사용.
 */


class List extends Array {
    static get [Symbol.species]() {
        return Array;
    }


    // static get [Symbol.species]() {
}

const myList = new List();
const clone = myList.slice();

console.log(clone instanceof List);
console.log(clone instanceof Array);

console.log('---- person example ----');

const person = {
    name: 'Kim',
    age: 30
};

with (person) {
    // person['name'] = 'Lee';
    console.log(name);
}
