/**
 * 변수 복사
 */

// let a = 10;

// function f(a) {...}
// class Person(a);
// item[a];

/**
 * 타입에 따라 변수 복사 유형이 나뉨
 * 1. 프리미티브 타입
 *  - 값 복사 (메모리에 새로운 공간을 확보하여, 값을 할당)
 * 
 *  number, boolean
 *  string, null
 *  undefined, symbol
 *  bigint
 * => 크기 고정
 * 
 * 2. 참조형 타입
 *  - 얕은 복사
 *  - 깊은 복사
 * 
 *  class, array, function
 * => 크기 동적
 * 
 * 
 * 참조형들은 크기를 고정할 수 없다.
 * 따라서, rR
 * 
 */

let a = 10;     // number
let person = {
    name: 'codingMax'
};


console.log('hello world')