// クラス
class Person {
    name;
    age;
    deptId;
    deptName;
    constructor(name, age, deptId, deptName) {
        this.name = name;
        this.age = age;
        this.deptId = deptId;
        this.deptName = deptName;
    }
    greeting() {
        console.log(`私の名前は ${this.name} です。私の年齢は ${this.age} 歳です。`);
    }
    // インターフェースから実装
    dispDeptInfo() {
        console.log('-- 部署情報 --');
        console.log(this.deptId + ':' + this.deptName);
    }
}
class Room {
    name;
    // インターフェースから実装
    deptId;
    deptName;
    constructor(name, deptId, deptName) {
        this.name = name;
        this.deptId = deptId;
        this.deptName = deptName;
    }
    // インターフェースから実装
    dispDeptInfo() {
        console.log(`-- 部屋[${this.name}]の部署情報 --`);
        console.log(this.deptId + ':' + this.deptName);
    }
}
let emp1 = new Person('木内', 37, 't1', '講師');
// emp1.greeting()
// emp1.dispDeptInfo()
let room1 = new Room('第一教室', 't1', '研修部');
// room1.dispDeptInfo()
// 共通点のみを実行することができる。
let arr = [emp1, room1];
arr.forEach(element => {
    element.dispDeptInfo();
});
export {};
//# sourceMappingURL=script.js.map