// メンバークラス
class Member {
    id;
    pass;
    name;
    constructor(id, pass, name) {
        this.id = id;
        this.pass = pass;
        this.name = name;
    }
    login(name) {
        console.log(`${name}さんログイン成功`);
    }
}
// メンバークラスのインスタンスを生成
let Member1 = new Member(123, "123", "osawa");
// 管理者クラス
class Admin extends Member {
    deleteUser(id) {
        return console.log(`${id}削除`);
    }
}
// 管理者クラスのインスタンスを生成
let Admin1 = new Admin(123, "12345", "osawa");
// メンバー1さんのるグイン
Member1.login("大澤");
Admin1.login("大城");
Admin1.deleteUser(123);
export {};
//# sourceMappingURL=script.js.map