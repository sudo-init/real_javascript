function fetchData(url, success, failed) {
    console.log(`fetching data from ${url}...`);
    setTimeout(function () {
        // 성공이라면
        const error = null;
        // const data = fetch(url);
        const data = 'You are Great!';
        if (error) {
            failed(error);
        } else {
            success(data);
        }
    }, 1000);
}

/**
 * 이처럼 비동기 실행의 결과가 서로 의존성을 가질 때,
 * 콜백 헬이라는 문제가 발생한다. 
 * 콜백 헬이 생기면 코드의 구조가 비선형이어서 코드를 이해하고 관리하는게 힘들어 진다.
 * 이를 해결하기 위해서 자바스크립트는 Promise 를 제공한다.
 */
fetchData('https://api.service.com/message/1', function (msg1) {
    fetchData('https://api.service.com/message/2', function (msg2) {
        fetchData('https://api.service.com/message/3', function (msg3) {
            console.log('가져온 데이터 목록: ');
            console.log(`- 1. ${msg1}`);
            console.log(`- 2. ${msg2}`);
            console.log(`- 3. ${msg3}`);
        }, function (error) {
            console.error(error.message);
        });
    }, function (error) {
        console.error(error.message);
    })
}, function (error) {
    console.error(error.message);
});


/**
 * 비동기 프로그래밍
 * - 콜백 함수를 Promise로 변경하기
 */

function fetchData(url) {
    console.log(`fetching data from ${url}...`);
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const error = null;
            const data = 'Success'
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        }, 1000);
    });
}

const promise1 = fetchData('https://api.service.com/message/1');
const promise2 = fetchData('https://api.service.com/message/2');
const promise3 = fetchData('https://api.service.com/message/3');

Promise.all([
    promise1,
    promise2,
    promise3,
]).then(([msg1, msg2, msg3]) => {
    console.log('Promise 가져온 데이터 목록: ');
    console.log(`Promise - 1. ${msg1}`);
    console.log(`Promise - 2. ${msg2}`);
    console.log(`Promise - 3. ${msg3}`);
}).catch((error) => {
    console.log(error);
});
