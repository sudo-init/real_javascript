/**
 * Iterable과 Iterator 
 * - Symbol.iterator
 */


const numbers = [1, 2, 3, 4, 5];
const iterator = numbers[Symbol.iterator]();  // Symbol.iterator는 이터레이터를 반환한다.

console.log(iterator.next());   // iterator를 이용해서 순회하기

for (const value of numbers) {
    console.log(value);
}

console.log(iterator.next());

/** ====================================================================== */

class MyIterator {
    next() {
        return { value: "hello", done: false };
    }
}

class MyIterable {
    [Symbol.iterator]() {
        return new MyIterator();
    }
}

const iterable = new MyIterable();
const iterator3 = iterable[Symbol.iterator]();

for (const value of iterable) {
    console.log(value);
}


class InfiniteIterator {
    // constructor() {
    //     this.count = 0;
    // }

    // next() {
    //     return { value: this.count++, done: false };
    // }

    #count = 0;
    next() {
        this.#count += 1;
        return { value: this.#count, done: false };
    }
}

class InfiniteCounter {
    [Symbol.iterator]() {
        return new InfiniteIterator();
    }
}




const iterable2 = new InfiniteCounter();
const iterator4 = iterable2[Symbol.iterator]();
// console.log(iterator4.next());
console.log('stoped');

