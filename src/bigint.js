/**
 * Bigint
 * - console.log(2**53) === console.log(2**53 + 1) => true
 * - console.log(9999_9999_9999_9999) 는 무엇이 출력될까?
 */


console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MAX_SAFE_INTEGER <= 9999_9999_9999_9999n);

console.log(9999_9999_9999_9999);


console.log(9007199254740991 === 9007199254740992); // true
// 값이 다름에도 true 출력.
// 위와 같은 이유로 BigInt가 등장하게 되었다.

const n1 = BigInt(123456);
const n2 = 123456n;

console.log(typeof n1);
console.log(typeof n2);

const n3 = 123456;
console.log(n1 == n3);    // true
console.log(n1 === n3);   // false