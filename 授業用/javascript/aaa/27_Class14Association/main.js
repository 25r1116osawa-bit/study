// クラスについて
// ポリモフィズム編

// モジュールのインポート(default)、標準モジュールの取り込み
import Fan from "./Fan.js"
import PortableFan from "./PortableFan.js"

// モジュールのインポート、モジュール出力
// import {Fan} from "./Fan.js"


// 出力先の要素を習得
let output = document.getElementById('output')

// インスタンス化
let fan01 = new Fan(output)
let fan02 = new Fan(output,7)
let fan03 = new PortableFan(output)
let fan04 = new PortableFan(output,10)

// fan01のメソッドの呼び出し
output.innerHTML += fan01.swing + '<br>'
fan01.pressSwingButton() + '<br>'
output.innerHTML += fan01.swing + '<br>'
output.innerHTML += fan01.blades + '<br>'
fan01.blowing()
fan01.pressPowerButton()
fan01.changeWindPower()
fan01.changeWindPower()
fan01.blowing()

// fan02のメソッドの呼び出し
output.innerHTML += fan02.swing + '<br>'
fan02.pressSwingButton() + '<br>'
output.innerHTML += fan02.swing + '<br>'
output.innerHTML += fan02.blades + '<br>'
fan02.blowing()
fan02.pressPowerButton()
fan02.changeWindPower()
fan02.changeWindPower()
fan02.blowing()
fan02.blowing()

// fan03のメソッドの呼び出し
output.innerHTML += fan03.swing + '<br>'
fan03.pressSwingButton() + '<br>'
output.innerHTML += fan03.swing + '<br>'
output.innerHTML += fan03.blades + '<br>'
fan03.blowing()
fan03.pressPowerButton()
fan03.changeWindPower()
fan03.changeWindPower()
fan03.blowing()
fan03.blowing()

// fan04のメソッドの呼び出し
output.innerHTML += fan04.swing + '<br>'
fan04.pressSwingButton() + '<br>'
output.innerHTML += fan04.swing + '<br>'
output.innerHTML += fan04.blades + '<br>'
fan04.blowing()
fan04.pressPowerButton()
fan04.changeWindPower()
fan04.changeWindPower()
fan04.blowing()
fan04.blowing()

let fans = [new Fan(output),new Fan(output,3),new PortableFan(output),new PortableFan(output,12)]
fans.forEach(fan => {
    output.innerHTML += fan.swing + '<br>'
    fan.pressSwingButton() + '<br>'
    output.innerHTML += fan.swing + '<br>'
    output.innerHTML += fan.blades + '<br>'
    fan.blowing()
    fan.pressPowerButton()
    fan.changeWindPower()
    fan.changeWindPower()
    fan.blowing()
    fan.blowing()
});

// クラスプロパティ(クラス変数)のアクセス
Fan.infoFans()

