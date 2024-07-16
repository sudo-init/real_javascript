/**
 *  비동기 프로그래밍
 *  - fetch 함수와 API 요청
 */



// 타입스크립트
// const promise : Promise<Response> = fetch(url, options);

// const promise = fetch(url, options);

// promise.then((response) => {
//     return response.json();
// })
//     .then((json) => {
//         console.log(json);
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('요청이 완료되었습니다. (Finally)');
//     });

// https://jsonplaceholder.typicode.com/


/**
 * Get 요청
 */

url = 'https://jsonplaceholder.typicode.com/todos'

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`오류! status: ${response.status}`);
        }
        return response.json();
    })
    .then(json => console.log(json))
    .catch(error => console.error(error));


/**
 * Post 요청
 */

url = 'https://jsonplaceholder.typicode.com/todos'

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'JavaScript',
        body: 'Hello JavaScript',
        completecd: false,
        userId: 1
    })
})
    .then((response) => {
        if (!response.ok) {
            throw new Error(`오류! status: ${response.status}`);
        }
        return response.json();
    })
    .then(json => console.log(json))
    .catch(error => console.error(error));

