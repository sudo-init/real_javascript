/**
 * ES5 시절의 OOP
 * Object.create 와 프로토타입
 */

const prototype = {

    specise: 'Human',

    constructor: function (name) {
        this.name = name;
        return this;
    },

    greet: function () {
        console.log(`Hello. I'm ${this.name}`);
    }
};

// Object.create()을 통해 객체 생서
// 생성자 함수를 흉내내어 constuctor() 호출 
// => return this를 하기 때문에 인스턴스를 반환.
const p1 = Object.create(prototype).constructor('CodingMax');
console.log(p1);
console.log(p1.name);



/**
 * new 연산자에 대하여...
 */