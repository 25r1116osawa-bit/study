// 商品インターフェース

// インターフェースの宣言
interface Product{
    readonly id: number
    name: string
    price: number
    description?: string
    category: string
}

// オブジェクトの生成
const product1: Product = {
    id: 1001,
    name: "ワイヤレスイヤホン",
    price: 6980,
    category: "イヤホン",
}

// product1.id = 1000

interface Authentication{
    readonly id: number
    pass: string
    name: string
    login(): void
}

interface Management{
    deleteUser(id: number): void
}

class Member implements Authentication
{
    readonly id: number
    pass: string
    name: string

    constructor(id: number,pass: string,name:string){
        this.id = id
        this.pass = pass
        this.name = name
    }

    login(): void {
        console.log(`${this.name}さんログイン成功`)
    }

}

class Admin extends Member implements Management{
    deleteUser(id: number): void {
        console.log(`ID:[${id}]削除`)
    }
}

const member:Member = new Member(1,'aiueo','メンバー1')
const admin:Admin = new Admin(1,'aiueo','管理者1')
// member.id = 3
// admin.id = 3

member.login()
admin.login()
admin.deleteUser(123)