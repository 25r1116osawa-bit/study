// クラスについて
// 継承編

// モジュールのインポート(default)、標準モジュールの取り込み
import Fan from "./Fan.js"

// モジュールのインポート、モジュール出力
// import {Fan} from "./Fan.js"


// 出力先の要素を習得
let output = document.getElementById('output')

// インスタンス化
let fan01 = new Fan(output)
let fan02 = new Fan(output,7)

// fan01のメソッドの呼び出し
output.innerHTML += fan01.swing + '<br>'
fan01.pressSwingButton() + '<br>'
output.innerHTML += fan01.swing + '<br>'
output.innerHTML += fan01.blades + '<br>'


// fan02のメソッドの呼び出し
output.innerHTML += fan02.swing + '<br>'
fan02.pressSwingButton() + '<br>'
output.innerHTML += fan02.swing + '<br>'
output.innerHTML += fan01.blades + '<br>'

// クラスプロパティ(クラス変数)のアクセス
Fan.infoFans()
