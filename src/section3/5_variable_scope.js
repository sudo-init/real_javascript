/**
 * 변수 스코프
 */

// var는 함수 스코프
// es6 let, const 블록 스코프
function testTimer() {
     console.log(i);
     for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
     }
     console.log('for문 종료', i);
}
testTimer();
// i = 3 3번 출력
// for문이 먼저 끝난 이후에 함수가 실행되기 때문에 
// i = 3인채로 3번 출력하게 됨 => 함수 스코프이기 때문에


function testTimer2() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
}
testTimer2()

// let은 블록 스코프이기 때문에 i 값이 for문 한 번당 바뀌는 값을 참조하게 됨
// 하지만, 
// var는 함수 스코프이기 때문에 for문을 다 돈 후의 i를 참조한다.(아직 스코프가 내에 있기 때문에)
// 즉, 값이 3인 변수를 참조하게 되는 것.
// 1초 후에 실행되는 함수에는 i=3인 값이 들어감
// 위의 코드는 아래와 같음

function testTimer3() {
    for (var i = 0; i < 3; i++) {
        (function () {
            var j = i;
            setTimeout(function () {
                console.log(j);
            }, 1000);
        })();
    }
}

testTimer3();
// console.log()

