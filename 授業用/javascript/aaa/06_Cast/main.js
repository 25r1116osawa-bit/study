// 型変換

// 出力準備
let output = document.getElementById('output')

// 文字列＋数値
//現象: '1' + 20 → '120'（文字列として連結される）
//理由: JavaScriptでは + 演算子は 片方が文字列なら文字列連結 になる
//使う場面:
//ユーザー入力（文字列）をそのまま表示したいとき
//HTMLに文字列として出力したいとき

let str1 = '1'
let num1 = 20
let result = str1 + num1
output.innerHTML += result
output.innerHTML += '<br>'
output.innerHTML += typeof result
output.innerHTML += '<br>'



// 文字列(数値に型変換)＋数値
//現象: Number('1') + 20 → 21（数値として計算される）
//理由: Number() を使うと文字列を数値に変換できる
//使う場面:
//入力フォームから文字列として受け取った数値を計算したいとき
//計算前に必ず型を揃えたいとき

result = Number(str1) + num1
output.innerHTML += result
output.innerHTML += '<br>'
output.innerHTML += typeof result
output.innerHTML += '<br>'






// 基本型を参照型に変換（ラッパークラス）
let str2 = new String('3000')
output.innerHTML += typeof str2
output.innerHTML += '<br>'

// instanceof 型(参照型)を比べるキーワード
output.innerHTML += str2 instanceof String
output.innerHTML += '<br>'
