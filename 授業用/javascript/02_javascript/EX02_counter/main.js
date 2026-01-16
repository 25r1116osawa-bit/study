// 値が変化する、取得する要素を予め変数に格納しておく
let output = document.getElementById('output')

// 定数
// 変数と違って、値を変更できない名前のついたモノです。
// 可読性を上げるために定数を利用。
const PLUS = 1
const MINUS = 2
const RESET = -1

// グローバル変数→どこでも使える変数
let counter = 0

// 出力文字列の生成(テンプレートリテラル)
output.textContent = `カウンター：${counter}`
// 上と同意義 'カウンター：' + counter


// ボタンの制御関数
function btn(mode){
    // modeはローカル変数
    switch (mode) {
        case PLUS:
            counter++
            break;
        case MINUS:
            counter--
            break;
        case RESET:
            counter = 0
            break;    
        default:
            break;
    }
    // メッセージの生成
    let msg = `カウンター：${counter}`
    // 出力処理
    output.textContent = msg
}
