/**
 * Iterator and Iterable
 * - Symbol.asyncIterator
 */


class asyncIterator {
    constructor(end) {
        this.value = 0;
        this.end = end;
    }


    // Promise<IteratorResult>
    //     next() {
    //         return new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 if (this.value < this.end) {
    //                     resolve({ value: this.value++, done: false });
    //                 } else {
    //                     resolve({ done: true });
    //                 }
    //             }, 1000);
    //         });
    //     }

    next() {
        if (this.value <= this.end) {
            return new Promise((resolve, reject) => {
                // setTimeout(() => {
                //     resolve({ value: this.value++, done: false });
                // }, 1000);

                setTimeout(() => resolve({
                    value: this.value++,
                    done: false
                }), 1000);

            });
        }

        return Promise.resolve({ done: true });
    }
}


class AsyncCounter {
    constructor(end) {
        this.end = end;
    }

    [Symbol.asyncIterator]() {
        return new asyncIterator(this.end);
    }
}

(async function () {
    const counter = new AsyncCounter(5);
    for await (const value of counter) {
        console.log(value);
    }
})();



// (async () => {
//     const asyncCounter = new AsyncCounter(3);
//     const iterator = asyncCounter[Symbol.asyncIterator]();
//     console.log(await iterator.next());
// })();
