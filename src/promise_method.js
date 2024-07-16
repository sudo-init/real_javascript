/**
 *  비동기 프로그래밍
 *  - Promise 만들기
 */


// const executor = (resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve('성공');
//     } else {
//         reject(new Error('오류'));
//     }
// }

// const promise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve('성공');
//     } else {
//         reject(new Error('오류'));
//     }
// });


/************************************************************************** */

const promise = new Promise((resolve, reject) => {
    // resolve('성공');
    reject(new Error('실패'));
});

// promise.then((value) => {
//     console.log(value);
// });

promise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log('무조건 실행1');
});


const onFulfilled = (value) => {
    console.log(value);
}

const onRejected = (error) => {
    console.error(error);
}

promise.then(
    (value) => console.log(value),
    (error) => console.error(error)
);

promise.then(onFulfilled, onRejected);


const promise2 = Promise.resolve('성공2');
promise2
    .then((value) => console.log(value))
    .finally(() => console.log('무조건 실행2'));

const promise3 = Promise.reject(new Error('실패'));
promise3
    .then((value) => console.log(value))
    .catch((error) => console.error(error))
    .finally(() => console.log('무조건 실행3')); 