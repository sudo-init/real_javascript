


class Person {
    constructor(name) {
        this.name = name;
    }


}

class Employee extends Person {
    constructor(name, job) {
        super(name);
        this.job = job;
    }

    introJob() {
        console.log(`I work at ${this.job}`);
    }
}

class Manager extends Employee {
    constructor(name, job, team) {
        super(name, job)
        this.team = team;
    }
}