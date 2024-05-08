/**
 * 실행 컨텍스트
 *
 * 1. Lexical Scope
 * 2. this 바인딩
 * 3. Scope chain (변수와 함수 찾기)
 * 4. 호이스팅의 원인
 * 5. 클로저
 *
 */

var a = "This is var variable a";
let b = "This is let variable b";
const c = "This is const constant c";

function printA() {
  console.log("a", a);
}

function printAB() {
  printA();
  console.log("b", b);
}

function printABC() {
  printAB();
  console.log("c", c);
}

printABC();

/**
 * 자바스크립트 엔진이 스크립트 코드를 실행할 때,
 * 1. 먼저 평가라는 것을 한다.
 *    평가를 하면서 실행에 필요한 내용을 생성하며
 *    코드 실행을 준비한다.
 * 2. 이 때, 자바스크립트 엔진이 생성하는 것이 실행 컨텍스트 (Execution Context)
 * 3. 즉, 실행 컨텍스트는 자바스크립트 코드가 실행되는 환경으로 생각할 수 있다.
 */

const ExecutionContext = {
  Lexical_Environment: {
    Object_Environment_Record: {
      // 변수 식별자와 변수 값을 관리한다.
      // 즉, 변수를 위한 저장소이다.
      [[local]]: [
        // 변수, 함수
        // 만약 함수에 내부 함수가 있다면 내부 함수도
      ],
      //...
    },
    Outer_Lexical_Environment_Reference: {
      // Scope를 관리한다.
      // Lexical Environment이 실습에서 보게될 [[scopes]] 슬롯을 관리한다.
      [[Scopes]]: [
        // Closure,
        // Script,
        // Global
      ],
      //...
    },
  },
  Variable_Environment: {
    // [[scopes]] 슬롯이 있어 Scope Chaining이 가능하다.
    // with 구문처럼 특정 경우를 제외하곤 Lexical과 Variable 환경이 서로 같기 때문에 이후 설명에서는 Lexical로 설명한다.
    ThisBinding: null,
    // 현재 실행 컨텍스트 내에서 this 키워드가 가리키는 객체
    // 전역 실행 컨텍스트는 globalThis를 갖고 함수 실행 컨텍스트는 함수가 어떻게 호출되었는지에 따라 달라진다.
    //...
  },
};

/**
 * 호이스팅이 일어나는 이유
 * 1. 현재 실행 컨텍스트를 만드는 과정 중
 *    현재 실행 컨텍스트의 local 스코프에 있는
 *    지역 변수의 정보를 Object Environment Record에 담기 때문에
 *    호이스팅이 발생한다.
 * 2. 즉, 같은 스코프에 있다면 변수의 선언 위치는 무시되는 것이다.
 */
