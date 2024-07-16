/**
 *  비동기 프로그래밍
 *  - Promise의 executor는 언제, 어디서 실행되는가?
 */

new Promise((resolve, reject) => {
    console.log('바로 실행됩니다.');
    console.log(`
    executor 함수의 내용이 비동기로 실행되는 것이 아닙니다. 
    동기로 실행돼요.`
    );
});

// executor가 바로 비동기로 실행되는 것은 아님
// function delay(duration_ms) {
//     const delayUntil = Date.now() + duration_ms;
//     while (Date.now() < delayUntil) { }
//     console.log(`${duration_ms}ms 동안 delay했습니다.`);
// }

// const blocking = new Promise((resolve, reject) => {
//     delay(10 * 60 * 1000);
// });
// blocking.then((value) => console.log(value));

console.log('Hello');

const nonBlocking = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     console.log('10ms 후에 실행됩니다.');
    //     resolve('Success');
    // }, 10);

    setTimeout(() => resolve('finished'), 10 * 60 * 1000);
});

nonBlocking.then((value) => console.log(value));
