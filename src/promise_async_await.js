/**
 * 비동기 프로그래밍
 *  - async & await
 */


function asyncDelay(duration_ms) {
    return new Promise((resolve, reject) => {
        if (duration_ms < 0) {
            reject(new Error(`delay time must be greater than ${duration_ms}`));
            return;
        }
        setTimeout(() => {
            resolve(`Success: ${duration_ms}ms`);
        }, duration_ms);
    });
}

const promise = asyncDelay(1000);

(async () => {
    const time = await promise;
    console.log(time);
})();


function sum(a, b) {
    return a + b;
}

(async () => {
    const result = sum(10, 20);
    console.log(result);
    try {
        const time = await asyncDelay(-1);
        console.log(time);
    } catch (error) {
        console.log('Error');
        console.error(error);
    }
})();

/**
 * async를 붙여서 함수를 만들면 자동으로 반환값이 promise
  await을 붙이지 않으면 promise가 pending 상태로 남아서 반환값을 받을 수 없음
 */

async function countDown(count) {
    for (let i = count; i >= 0; i--) {
        await asyncDelay(1000);
        console.log(`COUNT DOWN: ${i}`);
    }
}

async function asyncValue(n) {
    return n;
}

(async () => {
    console.log('START');
    const result = await asyncValue(10);
    console.log(result);
})();

