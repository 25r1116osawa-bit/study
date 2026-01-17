const name = "tatsuki";
const age = 37;

console.log(`私の名前は、${name}です。${age}です。`)


// 従来の関数
function func1() {

} 

// アロー関数 関数が含まれた変数
const func2 = () => {};

// {}がない場合はretunする。
const func3 = (str) => str;

// 引数の使い方
const func4 = (num1,num2) => num1 + num2;
console.log(func4(1,2));

//******************************//
// 単一式をretunしている。
const func5 =() => (1+1)
console.log(func6())

// オブジェクトを単一式としてretunしている。
// reactでよく出てくる。
const func6 = () => ( {name:"Osawa",age:20} );
console.log(func5())
//******************************//


