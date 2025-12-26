
// 認証インターフェース
interface Authentication {
    readonly id: number;
    pass: string;
    name: string;
    login(name:string): void
}

// マネージメントインターフェース
interface Management {
    deleteUser(id:number):void
}


// メンバークラス
class Member implements Authentication{
  readonly id: number
  pass: string;
  name: string;
  
  constructor(id: number, pass: string, name: string){
    this.id = id;
    this.pass = pass;
    this.name = name;
  }

  login(name: string){
    console.log(`${name}さんログイン成功`);
  }

}
// メンバークラスのインスタンスを生成
let Member1 = new Member(123,"123","osawa")




// 管理者クラス
class Admin extends Member implements Management {
  deleteUser(id:number):void {
    return console.log(`${id}削除`);
  }
  
}

// 管理者クラスのインスタンスを生成
let Admin1 = new Admin(123,"12345","osawa")


// メンバー1さんのログイン
Member1.login("大澤");

// 管理者1さんのログインとユーザー削除
Admin1.login("大城");
Admin1.deleteUser(123);