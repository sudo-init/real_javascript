/**
 * Symbol
 */

const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(symbol1 === symbol2); // false
console.log(symbol1 == symbol2);  // false


const person = {
    name: 'CodingMax',
    [Symbol.toStringTag]: 'Person 객체입니다.'
};

console.log(person.toString()); // [object Person 객체입니다.]

class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    // get [Symbol.toStringTag]() {
    //     // return 'Vector';
    //     return `Vector [x: ${this.x}, y: ${this.y}, z: ${this.z}]`;
    // }
}

const v = new Vector(1, 0, 0);
console.log(v); // Vector { x: 1, y: 0, z: 0 }
console.log(v.toString()); // [object Object]
console.log('0000');
console.log(Object.prototype.toString.call(v)); // [object Object]
console.log(v[Symbol.toStringTag]); // undefined
console.log(v.toStringTag); // undefined
// console.log()