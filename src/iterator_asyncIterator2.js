/**
 * Iterator and Iterable
 * - Symbol.asyncIterator
 */


// Iterator
class AsyncDataFetcher {
    constructor(queries) {
        this.queries = [...queries];
    }

    async next() {
        if (this.queries.length > 0) {
            const apiUrl = this.queries.shift();
            const response = await fetch(apiUrl);
            const value = await response.json();
            return { value, done: false };
        }
        return { done: true };
    }
}

// Iterable
class AsyncDataQueue {
    #queries;
    constructor() {
        this.#queries = [];
    }

    enqueue(query) {
        this.#queries.push(query);
    }

    [Symbol.asyncIterator]() {
        return new AsyncDataFetch();
    }
}