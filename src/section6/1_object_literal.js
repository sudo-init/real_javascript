
/**
 * 데이터 타입
 * 객체 Object 
 * 객체는 여러 속성을 가지고 있다.
 * - 속성: key => value
 */

// # 객체 생성 방법
// 1. {}
const emptyObject = {};

// 2. object();
const emptyObject2 = new Object();

const person = {
    name: 'CodingMax',
    age: 20,
    address: {
        city: 'seoul'
    }
};


const tmp = {};
console.log(tmp.name);
tmp.name = 'CodingMax';
console.log(tmp.name);
tmp["age"] = 20;
console.log(tmp.age);

const {
    address: {city}
} = person;

console.log({city});

const dog = {
    name: 'Coco',
    age: 2
};

// 객체 구조 분해
// Object destructuring

const { name, age } = person;
const { name: myDogName, age: myDogAge} = dog;
console.log({ name, age});
console.log({ myDogName, myDogAge });


// 객체 메서드 
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    }
}

console.log(calculator.add(10, 3))
console.log(calculator.sub(10, 3))


function operator(op, a, b) {
    return calculator[op](a, b);
}

console.log(operator('add', 10, 20));
console.log(operator('sub', 10, 20));


// 객체 메서드 - this 키워드
const person2 = {
    name: 'CodingMax',
    age: 10,
    job: 'programmer',
    greeting: function(friend) {
        console.log(`
            Hello! ${friend},
            I'm ${this.name}.
            ${this.age} years old.
        `)
    }
};

person2.greeting()


// object
// object.keys(), object.values()
console.log(Object.keys(person));
console.log(Object.values(person));

for (const key of Object.keys(person)) {
    console.log(person[key]);
}

for (const key in person ) {
    console.log(`${key} = ${person[key]}`);
}