/**
 * Symbol
 * - Symbol.hasInstance
 */


// instanceOf 연산자를 이용해서 타입 검사를 할 때,
// 로직을 추가해서 커스텀하게 사용할 때 사용


class List {
    static [Symbol.hasInstance](instance) {
        return Array.isArray(instance);
    }
}

console.log('a' instanceof List); // false
console.log([] instanceof List); // true
console.log({} instanceof List); // false

// function mixin(object, ...components) {
//     for (const component of components) {
//         for (const key of Reflect.ownKeys(component)) {
//             if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
//                 object[key] = component[key];
//             }
//         }
//     }
//     return object;
// }

function mixin(object, ...components) {
    for (const component of components) {
        for (const prop of Object.getOwnPropertyNames(component)) {
            if (!(prop in object)) {
                object[prop] = component[prop];
            }
        }
    }
    return object;
}

class Animal {

}

class Flyable {
    static [Symbol.hasInstance](instance) {
        return instance.fly && typeof instance.fly === 'function';
    }

    fly() {
        console.log('Fly!');
    }

}

const bird = mixin(new Animal(), Flyable.prototype);
bird.fly();

console.log(bird instanceof Animal); // true
console.log(bird instanceof Flyable); // false
// console.log(Flyable.prototype);