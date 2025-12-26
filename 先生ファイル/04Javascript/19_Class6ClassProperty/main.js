// クラスについて
// クラスプロパティ編

// 出力先の要素を習得
let output = document.getElementById('output')

// クラスの宣言
class Fan {

    // クラスプロパティ(クラスの変数)
    // 台数
    static number = 0
    
    // クラスプロパティ(クラス定数(変数))の定義
    // windPowerの日本語名称の統一用定数
    static POWER_STATUS = Object.freeze({OFF:'切', P1:'弱',P2:'中',P3:'強'})
    
    // プロパティ(オブジェクトの変数)
    // 羽根の枚数
    blades
    // 風力
    windPower
    // 電源
    power
    // 首振り
    swing
    // 状態の出力先
    output

    // コンストラクタ(メソッド)の宣言
    // プロパティを初期化するのが目的のメソッド
    // 汎用性をもたせる。(引数とデフォルト引数を利用)
    constructor(output,blades=5){
        // クラスプロパティへのアクセス
        // 台数を加算
        Fan.number++

        // 各値を初期化
        this.blades = blades
        // クラスプロパティ(クラス定数)の利用
        this.windPower = Fan.POWER_STATUS.OFF
        this.power = false
        this.swing = false
        this.output = output
    }

    // メソッド(関数)
    // 首振りボタン押下
    pressSwingButton(){
        output.innerHTML += '首振りボタンが押されました。' + '<br>'
        this.swing = true
    }

}

// インスタンス化
let fan01 = new Fan(output)
let fan02 = new Fan(output,7)

output.innerHTML += fan01.swing + '<br>'
// fan01のメソッドの呼び出し
fan01.pressSwingButton() + '<br>'
output.innerHTML += fan01.swing + '<br>'
output.innerHTML += fan01.blades + '<br>'

output.innerHTML += fan02.swing + '<br>'
// fan02のメソッドの呼び出し
fan02.pressSwingButton() + '<br>'
output.innerHTML += fan02.swing + '<br>'
output.innerHTML += fan02.blades + '<br>'

// クラスプロパティ(クラス変数)のアクセス
output.innerHTML += `扇風機の台数は全部で${Fan.number}台です。`