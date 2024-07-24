/**
 * Iterable과 Iterator 
 * - Range Iterable과 Iterator
 */


class ForwardRanageIterator {
    constructor(start, end) {
        this.current = start;
        this.end = end;
    }

    next() {
        if (this.current <= this.end) {
            const value = this.current;
            this.current += 1;
            return { value, done: false };
        }
        return { done: true };
    }
}

class BackwardRangeIterator {
    constructor(start, end) {
        this.current = end;
        this.start = start;
    }

    next() {
        if (this.current >= this.start) {
            const value = this.current;
            this.current -= 1;
            return { value, done: false };
        }
        return { done: true };

    }
}

class Range {
    constructor(start, end, reverse = false) {
        this.start = start;
        this.end = end;
        this.reverse = reverse;
    }

    [Symbol.iterator]() {
        return this.reverse
            ? new BackwardRangeIterator(this.start, this.end)
            : new ForwardRanageIterator(this.start, this.end);
    }
}


const range = new Range(1, 10, true);
console.log(...range);
for (const num of range) {
    console.log(num);
}

