/**
 * 오류 처리 (Error Handling)
 */


class UserDataRepository {
    constructor(provider) {
        this.provider = provider;
    }
    fetchUserData() {
        return this.provider.queryUserData();
    }
}

class UserDataFileProvider {
    queryUserData() {
        return { name: 'CodingMax', age: 20};
    }
}

class UserDataDBProvider {
    queryUserData() {
        // error
        throw new DBConnectionError('DB에 연결할 수 없습니다.');
    }
}

class DBConnectionError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

//-----
class UserDataService {
    constructor(repository) {
        this.repository = repository;
    }

    getUserData() {
        return this.repository.fetchUserData();
    }

}

// ---------
class MainView {
    drawUserDataGraph(data){
        console.log(`${JSON.stringify(data, null, 2)}를 사용하여 사용자 데이터 그래프를 그립니다.`);
    }
}

// ---------
class MainController {
    constructor(view, service) {
        this.view = view;
        this.service = service;
    }

    drawUserDataGraph() {
        try {
            const data = this.service.getUserData();
            this.view.drawUserDataGraph(data);
        } catch (error) {
            window.alert(`${error.name} :: ${error.message}`)
        }
    }
}


function program() {
    const repository = new UserDataRepository(new UserDataFileProvider());
    const service = new UserDataService(repository);
    const view = new MainView();
    const mainController = new MainController(view, service);
    mainController.drawUserDataGraph();
}

program();
