// 商品インターフェース
// オブジェクトの生成
const product1 = {
    id: 1001,
    name: "ワイヤレスイヤホン",
    price: 6980,
    category: "イヤホン",
};
class Member {
    id;
    pass;
    name;
    constructor(id, pass, name) {
        this.id = id;
        this.pass = pass;
        this.name = name;
    }
    login() {
        console.log(`${this.name}さんログイン成功`);
    }
}
class Admin extends Member {
    deleteUser(id) {
        console.log(`ID:[${id}]削除`);
    }
}
const member = new Member(1, 'aiueo', 'メンバー1');
const admin = new Admin(1, 'aiueo', '管理者1');
// member.id = 3
// admin.id = 3
member.login();
admin.login();
admin.deleteUser(123);
export {};
//# sourceMappingURL=script.js.map