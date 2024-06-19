

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, I'm ${this.name}`)
}

function Employee(name, job) {
    Person.call(this, name);
    this.job = job;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.introJob = function () {
    console.log(`I work at ${this.job}`);
}

function Manager(name, job, team) {
    Employee.call(this, name, job);
    this.name = name;
}

