/**
 * 비동기 프로그래밍
 *  - Promise all, race, allSettled
 */


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise1 완료');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise2 완료');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise3 완료');
    }, 3000);
});

console.time('Promise.all');
Promise.all([promise1, promise2, promise3])    // 전체 실행
    .then((values) => {
        console.log(values);
        console.timeEnd('Promise.all');
    }).catch((error) => {
        console.error(error);
    });

console.time('Promise.race')
Promise.race([promise1, promise2, promise3])    // 가장 빠른 것만 실행
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.timeEnd('Promise.race'));



const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('에러 발생')), 2000);
});

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise2 완료');
    }, 2000);
});

const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise3 완료');
    }, 3000);
});

Promise.allSettled([promise1, promise2, promise3])    // 전체 실행하면서 promise의 상태를 반환
    .then(([result1, result2, result3]) => {
        console.log(result1);
        console.log(result2);
        console.log(result3);
    })
    .catch((error) => console.error(error.errors));



Promise.any([promise4, promise5, promise6])    // 가장 빠른 것만 실행하면서 promise의 상태를 반환 (모든 것이 다 에러 났을 때만 catch 실행)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));