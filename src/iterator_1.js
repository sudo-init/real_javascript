/**
 * Iterable과 Iterator Pattern
 * - Iterator 디자인 패턴: 컬렉션의 요소를 순회하는 방법을 표준화하는 방법을 제공한다.
 */


class Iterator {
    hasNext() {
        throw new Error('Not implemented');
    }

    next() {
        throw new Error('Not implemented');
    }
}

class ForwardCollectionsIterator extends Iterator {
    constructor(collection) {
        super();
        this.collection = collection;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.collection.length;
    }

    next() {
        const item = this.collection[this.index];
        this.index += 1;
        return item;
    }
}


class BackwardCollectionsIterator extends Iterator {
    constructor(collection) {
        super();
        this.collection = collection;
        this.index = collection.length - 1;
    }

    hasNext() {
        return this.index >= 0;
    }

    next() {
        const item = this.collection[this.index];
        this.index -= 1;
        return item;
    }
}


class Collection {
    createForwardIterartor() {
        throw new Error('Not implemented');
    };

    createBackwardIterartor() {
        throw new Error('Not implemented');
    };
}

class StringCollection extends Collection {
    constructor(data) {
        super();
        this.data = data;
    }

    createForwardIterartor() {
        return new ForwardCollectionsIterator(this.data);
    }

    createBackwardIterartor() {
        return new BackwardCollectionsIterator(this.data);
    }
}

// ForwardCollectionsIterator.prototype[Symbol.iterator] = function () {
//     return this;
// }

// function () {
//     ForwardCollections;
// }

const stringCollection = new StringCollection('abcde');

const forwardIterator = stringCollection.createForwardIterartor();
while (forwardIterator.hasNext()) {
    console.log(forwardIterator.next());
}

console.log();

const backwardIterator = stringCollection.createBackwardIterartor();
while (backwardIterator.hasNext()) {
    console.log(backwardIterator.next());
}

class ArrayCollection extends Collection {
    constructor(items) {
        super();
        this.items = items;
    }

    createForwardIterartor() {
        return new ForwardCollectionsIterator(this.items);
    }

    createBackwardIterartor() {
        return new BackwardCollectionsIterator(this.items);
    }
};

const arrayCollection = new ArrayCollection([1, 2, 3, 4, 5]);
console.log('\n\n---- ArrayCollection ----');
// console.log(arrayCollection.createBackwardIterartor());

console.log('---- Forward ----');
const iterator1 = arrayCollection.createForwardIterartor();
while (iterator1.hasNext()) {
    console.log(iterator1.next());
}

console.log('---- Backward ----');
const iterator2 = arrayCollection.createBackwardIterartor();
while (iterator2.hasNext()) {
    console.log(iterator2.next());
}