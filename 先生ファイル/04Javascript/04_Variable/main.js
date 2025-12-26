// JavaScriptでHTMLに出力する処理を行うための変数
let output = document.getElementById('output')

// 変数
// 変数を定義
// var let
// 基本はletを使う

// 変数を定義する。
let name1
// 変数に値を代入する。
name1 = '木内和也'

// 変数を定義して、値を代入する。
let name2 = '木内和也'

// 変数名の付け方
// 意味のある名前をつけてる。
// 基本的に名詞でつけてる。
// ２単語以上の場合
// 様々なルールが存在する。
// そのルールのことを命名規則

// 命名規則について
// キャメルケース（camelCase）
// ローワーキャメルケース（lowerCamelCase）
// アッパーキャメルケース（UpperCamelCase）
// スネークケース（snake_case）（SNAKE_CASE）
// ケバブケース(kebab-case)
// 変数は基本的にローワーキャメルケースを利用する。

// 変数の代入について
// = を利用して右辺の値を左辺に代入する
// 左辺に値が入っていた場合は上書きされる

// 変数の取得について
// 変数名を書くだけ

// 入力する文字変数を定義
let msg = 'あいうえお'
// 文字を出力する
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

// 動的型付けについて
// 計算結果の型が違っても、代入することができる。(自動的に型が変化する)

// 数値型+数値型 : 数値型
let num2 = num1 + num1
output.innerHTML += '<br>'
output.innerHTML += num2

// 数値型+文字列型 : 文字列型
let mix1 = num1 + str1
output.innerHTML += '<br>'
output.innerHTML += mix1
