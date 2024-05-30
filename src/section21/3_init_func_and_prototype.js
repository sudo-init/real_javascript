/**
 * ES5 시절의 OOP
 */


// 1. 객체 리터럴
const obj1 = {
    myname: 'CodingMax'
}

// 2. 생성자 함수
function Obj(myname) {
    this.myname = myname;
}

const obj2 = new Obj('CodingMax');
console.log(obj2.myname);
console.log('정의하기 전:', obj2.age);
obj2.age = 10;
console.log('정의한 후:', obj2.age);
// console.log(obj2.age);

for (let i = 0; i < 100; i++) {
    new Obj(`${i}`);
}


// 3. Object.create, Prototype
const prototype = { myname: 'CodingMax'};
const obj3 = Object.create(prototype);
console.log(obj3);
console.log(obj3.myname);
console.log(Object.getPrototypeOf(obj3));
console.log(Object.getPrototypeOf(obj3) === prototype)
console.log(obj3.age);


////////////////////
function Person(myname) {
    this.myname = myname;
    // this.greet = function() {
    //     console.log(`Hello, I'm ${this.myname}`);
    // };
}

// 위 방법의 단점
// Person 객체의 이름 변수인 myname은 객체마다 생기는 것이 맞지만,
// 함수은 greet()은 메모리에 하나만 있어도 된다.
// 하지만, 위의 방법대로 객체를 생성하면 객체마다 greet() 함수 하나를 
// 가지게 되어 메모리를 낭비하는 현상이 발생한다.


Person.prototype.greet = function () {
    console.log(`Hi, I'm ${this.myname}`);
}
// 그래서 위의 방법을 사용하여 함수를 추가해주는 방식을 씀.
// 이렇게 하면 Person 객체 내에 this.greet() 함수를 대신 할 수 있음.

const jun = new Person('Jun');
jun.greet();

const codingMax = new Person('codingMax');
codingMax.greet();
