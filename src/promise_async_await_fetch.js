/**
 * 비동기 프로그래밍
 *  - async & await를 사용해서 jsonplaceholder에서 사용자의 아이템 가져오기
 */


class UserItem {
    static BASE_URL = 'https://jsonplaceholder.typicode.com';
    async items(userId) {
        throw new Error('UserItem을 상속하여 items를 구현해주세요.');
    }
}

class Todo extends UserItem {
    async #json(userId) {
        const response = await fetch(`${UserItem.BASE_URL}/users/${userId}/todos`);
        return response.json();
    }

    #extractItems(json) {
        return json.map((item) => `[ToDo] ${item.title}`);
    }

    async items(userId) {
        const json = await this.#json(userId);
        return this.#extractItems(json);
    }
}

// (async () => {
//     const todo = new Todo();
//     const result = await todo.items(1);
//     console.log(result);
// })();

class Post extends UserItem {

    async #json(userId) {
        const response = await fetch(`${UserItem.BASE_URL}/users/${userId}/posts`);
        return response.json();
    }

    #extractItems(json) {
        return json.map((item) => `[Post] ${item.title}`);
    }

    async items(userId) {
        const json = await this.#json(userId);
        return this.#extractItems(json);
    }
}

class Album extends UserItem {
    async #json(userId) {
        const response = await fetch(`${UserItem.BASE_URL}/users/${userId}/albums`);
        return response.json();
    }

    #extractItems(json) {
        return json.map((item) => `[Album] ${item.title}`);
    }

    async items(userId) {
        const json = await this.#json(userId);
        return this.#extractItems(json);
    }
}


// (async () => {
//     const promises = [
//         new Todo().items(1),
//         new Post().items(1),
//         new Album().items(1)
//     ];

//     try {
//         const [todoList, postList, albumList] = await Promise.all(promises);
//         console.log({ todoList, postList, albumList });
//     } catch (error) {
//         console.log('에러 발생');
//         console.log(error);
//     }
// })();

(async () => {
    const promises = [
        new Todo().items(1),
        new Post().items(1),
        new Album().items(1)
    ];

    try {
        const [todoList, postList, albumList] = await Promise.allSettled(promises);
        console.log({ todoList, postList, albumList });
    } catch (error) {
        console.log('에러 발생');
        console.log(error);
    }
})();