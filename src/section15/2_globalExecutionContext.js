

/** 전역 실행 컨텍스트
 *  제일 먼저 생성되는 실행 컨텍스트
 * 
 */
const GlobalExecutionContext = {
    LexicalEnvironment: {
        // ...,
        // 가장 최상위 실행 컨텍스트
        // 상위 스코프는 없다.
        // 자바스크립트 코드 최초로 실행될 때, 만들어진다.
        // Lexical 환경에서 Global 스코프를 관리한다.
        // 따라서, 특정 함수나 블럭이 아닌 Global 스코프에
        // 정의된 var변수 및 함수 식별자(함수 표현식으로 할당한)는
        // global 스코프에 존재한다.
        // let, const 변수는 script 스코프에 존재한다.
        // this는 globalThis를 가리킨다. 
        // 브라우저에서는 전역 실행 컨텍스트의 this가 window객체이다.
        [[scopes]]: null
    },
    ThisBinding: globalThis
}


function aa_func() { console.log('Hello'); }
var aa_func_var = function() { console.log('Hello') }
let aa_func_let = function() { console.log('Helllo') }
const aa_func_const = function () { console.log('Hello') }

/**
 * aa_func() 함수와 aa_func_var 변수는 글로벌 스코프에 있음
 * 따라서, this로 접근이 가능
 * 
 * this.aa_func(); -> 가능
 * this.aa_func_var(); -> 가능
 * aa_func(); -> 가능
 * aa_func_var(); -> 가능
 * => this를 쓰지 않아도, 스코프 체이닝을 통해서 글로벌 스코프에 있는
 *    변수 및 함수 호출 가능
 * 
 * let과 const로 선언된 변수는 스크립트 스코프에 존재
 * 따라서, this로 접근이 불가능 (여기서 this는 globalThis이기 때문)
 * 
 * this.aa_func_let(); -> 불가능
 * this.aa_func_const(); -> 불가능
 * aa_func_let(); -> 가능
 * aa_func_const(); -> 가능
 * 
 * 
 * 
 * 
 */