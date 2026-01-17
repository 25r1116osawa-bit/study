// 出力先の要素を習得
let output = document.getElementById('output')

// アロー関数

// 通常の関数の作り方
function func01(){
    console.log("Hello");
}

// 無名関数
// 名前を付ける必要がないときに使う。
const func02 = function(){
    console.log("Hello");
}

func02();


// 通常のアロー関数
const func03 = () =>{
    console.log("Hello");
}
func03();

// {}を省略したアロー関数
const func04 = () => console.log("Hello");
func04();

// 関数を値として扱うことができる言語
// {}とreturnを省略したアロー関数
const func05 = () => "Hello"
console.log(func05())

