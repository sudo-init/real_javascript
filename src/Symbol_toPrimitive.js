/**
 * Symbol
 * - Symbol.toPrimitive
 * 
 *    Symbol.toPrimitive는 JavaScript의 객체가 원시값으로 변환될 때 호출되는 함수입니다. 
 *    이는 특히 객체가 숫자, 문자열 또는 심볼로 변환될 때 어떤 방식으로 변환될지를 사용자 정의하기 위해 사용됩니다.
 */


const sum = '9' + 1;


console.log(sum); // 91
console.log(typeof sum); // string

const three = {
    [Symbol.toPrimitive](hint) {
        console.log(`힌트는 ${hint} 입니다.`);
        if (hint === 'number') {
            return 3;
        }
        if (hint === 'string') {
            return '문자열 3';
        }

        return true;
    }
};
const sum2 = three + 1;     // 여기서 three는 디폴트.

console.log('number로 변환')
console.log(Number(three)); // 3

console.log('------ 1 -------');
console.log(sum2);             // 2
console.log(typeof sum2);      // number
console.log(three.toString()); // [object Object]

console.log('------ 2 -------');
console.log(!three); // false
console.log(!!three); // true
console.log(Boolean(three)); // true

console.log(1 + 2 + three + 4); // 8
console.log(+true); // 1
