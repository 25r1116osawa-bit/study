// クラスについて
// アクセサー2編

// 出力先の要素を習得
let output = document.getElementById('output')

// クラスの宣言
class Fan {

    // クラスプロパティ(クラスの変数)
    // 台数
    static #number = 0
    
    // クラスプロパティ(クラス定数(変数))の定義
    // windPowerの日本語名称の統一用定数
    static POWER_STATUS = Object.freeze({OFF:'切', P1:'弱',P2:'中',P3:'強'})
    
    // プロパティ(オブジェクトの変数)
    // 羽根の枚数
    #blades
    // 風力
    #windPower
    // 電源
    #power
    // 首振り
    #swing
    // 状態の出力先
    output

    // ゲッター/セッター

    // ゲッター(blades)
    get blades(){
        return this.#blades
    }

    // セッター
    // オブジェクトのプロパティに代入する。
    // セッター(blades)
    // 入力されたくない値を弾く機能を追加(バリデーション)
    set blades(blades){
        if(blades >= 0){
            this.#blades = blades
        }
    }

    // ゲッター(windPower)
    getWindPower(){
        return this.#windPower
    }

    // セッター(windPower)
    setWindPower(windPower){
        this.#windPower = windPower
    }

    // ゲッター(power)
    getPower(){
        return this.#power
    }

    // セッター(power)
    setPower(power){
        this.#power = power
    }

    // ゲッター(swing)
    getSwing(){
        return this.#swing
    }

    // セッター(swing)
    setSwing(swing){
        this.#swing = swing
    }

    // クラスメソッド
    // オブジェクト(this)にアクセス不可
    // クラスプロパティにアクセス可
    // 扇風機の統計情報の表示
    static infoFans(){
        output.innerHTML += `扇風機の台数は全部で${Fan.#number}台です。`
    }

    // コンストラクタ(メソッド)の宣言
    // プロパティを初期化するのが目的のメソッド
    // 汎用性をもたせる。(引数とデフォルト引数を利用)
    constructor(output,blades=5){
        // クラスプロパティへのアクセス
        // 台数を加算
        Fan.#number++

        // 各値を初期化
        this.#blades = blades
        // クラスプロパティ(クラス定数)の利用
        this.#windPower = Fan.POWER_STATUS.OFF
        this.#power = false
        this.#swing = false
        this.output = output
    }

    // メソッド(関数)
    // 首振りボタン押下
    pressSwingButton(){
        output.innerHTML += '首振りボタンが押されました。' + '<br>'
        this.#swing = true
    }
}

// インスタンス化
let fan01 = new Fan(output)
let fan02 = new Fan(output,7)

// fan01のメソッドの呼び出し
output.innerHTML += fan01.getSwing() + '<br>'
fan01.pressSwingButton() + '<br>'
output.innerHTML += fan01.getSwing() + '<br>'
output.innerHTML += fan01.getBlades() + '<br>'


// fan02のメソッドの呼び出し
output.innerHTML += fan02.getSwing() + '<br>'
fan02.pressSwingButton() + '<br>'
output.innerHTML += fan02.getSwing() + '<br>'
output.innerHTML += fan01.getBlades() + '<br>'

// クラスプロパティ(クラス変数)のアクセス
Fan.infoFans()
