//JavaScriptでHTMLに出力する処理を行うための変数
let output = document.getElementById('output')


//変数を定義
//var:古くから使われており、他の言語と同じ 
//let:javascriptはget 


//変数を定義する。
let name1 

//変数に値を代入する。
name1 = '大澤'

//変数を定義して、値を代入する。
let name2 ='大澤です'

//変数名の付け方
//意味のある名前を名詞でつける
//2単語以上の場合は、さまざまなルールが存在する（命名規則）
//キャメルケース(CamelCase)
//アッパーキャメルケース(lowerCamelCase)
//スネークケース
//ケバブケース

//変数は基本的にローワーキャメルケースを利用する。
//変数の代入については、=を使い右辺の値を左辺に代入する。
//もし左辺に値がすでに入っている場合は、上書きされる

//変数の取得は変数名を書くだけ

//let a = 5;
//let b = 3;
//console.log(a + b);


//入力する文字変数を定義する
let msg ='あいうえお'
//文字を出力する
output.textContent = msg


// 変数の型について
// 大きく分類すると基本型と参照型に分けられる

// 基本型
// 文字列型や数値型のことで、その値がそのまま変数に格納されている。
// 一覧：
// 数値型
// 文字列型
// 真偽型
// numll
// undefined
// シンボル

// 参照型
// 配列やオブジェクト、関数の事でその値が格納されているアドレスを格納している。
// 一覧：
// 配列
// オブジェクト
// 関数

// 数値型としての変数
let num1 = 100
// 文字列型としての変数
let str1 = '100'

output.innerHTML += '<br>'
output.innerHTML += num1
output.innerHTML += '<br>'
output.innerHTML += str1

// + は加算代入で、以前の値を消したくない場合に使う
// 動的型付けについて
// 計算結果の型が違っても、代入することができる。(自動的に型が変化する)


//数値型+数値型:数値型

let num2 = num1 + num1
output.innerHTML += '<br>'
output.innerHTML += num2

// 数値型+文字列型 : 文字列型
let mix1 = num1 + str1
output.innerHTML += '<br>'
output.innerHTML += mix1