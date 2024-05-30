/**
 * ES5 시절의 OOP
 * - 생성자 함수와 프로토타입
 */

// 생성자 함수
function Person(name) {
    this.name = name;
}

// 타입의 속성 또는 정적 속성
Person.instanceCount = 0;

// 타입의 메서드 또는 정적 메서드
Person.increment = function () {
    Person.instanceCount++;
}

// prototype을 통해 함수와 변수 선언 및 할당
// 인스턴스 메서드
Person.prototype.greet = function () {
    console.log(`Hello, ${this.name}`);
};

// 인스턴스 속성
Person.prototype.specise = 'Human';

// new 연산자를 이용해서 객체 생성(생성자 함수)
const p1 = new Person('CodingMax');
console.log(p1);
p1.greet();
console.log(p1.specise);

const p2 = new Person('Jun');
console.log(p2.specise);