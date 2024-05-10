/**
 * Object and Prototype
 */

const person = {
    myname: 'CodingMax'
}
console.log(person.myname);


const prototype = person.__proto__;
console.log(typeof prototype) // 출력: object

// object의 prototype은 null

person.hasOwnProperty('myname');
const prototype12 = Object.getPrototypeOf(person);
console.log(prototype12);

const prototype2 = Object.getPrototypeOf(person);
console.log(prototype2); // 출력: object
console.log(prototype2 === Object.prototype); // 출력: true
