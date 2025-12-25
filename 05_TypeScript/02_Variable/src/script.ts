
// 変数の宣言
let name1: string
// 変数へ代入
name1 = '木内和也'

// 変数の宣言と代入を同時に（型推論を行うので型指定は、省略できます。）
let name2: string = '木内'

// 型について
// 基本型
// 数値型
let num1: number = 100
console.log(num1)

let num2: number = 200
console.log(num1 + num2)

// 文字列型に数値型を代入しようとすると、エラー
let mix1: string = (num1 + num2).toString()
console.log(mix1)

// 参照型
// 配列
let arr1: string[] = []
arr1.push('あいうえお')
// arr1.push(100)

let arr2: number[] = []
// arr2.push('あいうえお')
arr2.push(100)

// 飛ばした場合はそれまでの要素はすべてundefined
arr2[10] = 3

// 存在しない要素を取得してもエラーにならない(undefinedを取得できる)
console.log(arr2)
console.log(arr2[8])
console.log(arr2[12])

// 配列の要素の定数化(読み込み専用)
const powerLevel: readonly string[] = ['弱','中','強']
// powerLevel[1] = '書き込めなくなった。'

// オブジェクト
let obj1: {name: string,age: number}
obj1 = {name:'木内',age:37}
// obj1 = {name:'木内',age:'37'} プロパティの型が違う
// obj1 = {name:'木内'} プロパティの数が違う(オブジェクトの型エラー)

// プロパティをオプショナルにすると省略可能になる。
let obj2: {name: string,age?: number}
obj2 = {name:'木内'}

// any
// 型チェックを行いたくないときに使う
// すなわち、何でもできるようになる。
let obj3: any
obj3 = 123
obj3 = 'あいうえお'
obj3 = {1:'aaaa',2:222,3:'カキクケコ'}

// タプル型
let tuple1: [string,number]
tuple1 = ["木内和也",37]

