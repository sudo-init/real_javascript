/**
 * Symbol
 * - Symbol.search
 */


class GlobalSearch {
    constructor(value) {
        this.value = value;
    }

    // [Symbol.search](target) {
    //     return target.search(this.value);
    // }
    [Symbol.search](string) {
        const index = string.indexOf(this.value); // 문자열에서 검색
        return index === -1 ? 'Not Found' : index; // 검색 결과 반환
    }
}


class ReverseSearch {
    constructor(value) {
        this.value = value;
    }

    [Symbol.search](string) {
        return string.lastIndexOf(this.value);
    }
}

console.log('test'.search(new GlobalSearch('t'))); // 0
console.log('test'.search('t'));

console.log('test'.search(new ReverseSearch('t'))); // 3

