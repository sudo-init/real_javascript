
class Observer {
    update(state) {
        throw new Error('Observer를 상속하여 update를 구현해주세요.');
    }
}

class ConsoleLogger extends Observer {
    update(state) {
        console.log(JSON.stringify(state, null, 2));
    }
}

class Store {
    constructor(initialState) {
        this.state = initialState;
        this.observers = [];
    }

    notifyAll() {
        for(const observer of this.observers) {
            observer.update(this.state);
        }
    }

    subscribe(observer) {
        if (observer instanceof Observer) {
            this.observers.push(observer);
        } else {
            throw new Error('Observer의 인터페이스를 구현한 객체가 아닙니다.');
        }

        return () => {
            const index = this.observers.indexOf(observer);
            if (index !== -1) {
                this.observers.splice(index, 1);
            }
        };
    }

    setState(partialState) {
        if (typeof partialState === 'function') {
            this.state = {...this.state, ...partialState(this.state)}
        } else {
            this.state =  {...this.state, ...partialState};
        }
        this.notifyAll();
    }

    getState() {
        return this.state;
    }

    increment() {
        // this.setState((prevState) => ({count: prevState.count + 1}));
        this.setState({ count: this.state.count + 1});
    }

    decrement() {
        // this.setState((prevState) => ({count: prevState.count - 1}));
        this.setState({ count: this.state.count - 1});
    }
}

const store = new Store({ count: 10});
store.increment();
// store.decrement();

const logger = new ConsoleLogger();
const unsubscribe = store.subscribe(logger);
store.increment();
store.increment();
store.increment();
store.increment();
store.increment();
store.increment();
store.increment();
