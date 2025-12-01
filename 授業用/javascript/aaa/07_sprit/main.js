// 分岐構文

// 出力準備
let output = document.getElementById('output')

// 入力準備
let opt = document.getElementById('opt')
let variable = ""
function changeSelect(){
    // ドロップダウンメニューの値を取得
    variable = opt.value
    output.innerHTML = ""

    // if文
    // ブロックで囲った処理を実行するかどうか？の分岐を行う構文
    // ()の中には条件式を入れる
    // 条件式の結果はtrueかfalseになる
    // 特殊パターンが存在する。
    // 文字列の場合は""(空白)がfalse
    // 数値の場合は0がfalse
    if (variable) {
        output.innerHTML += "変数：True"
    }

    output.innerHTML += "<br>"

    // if-else文
    // ifブロックで囲った処理は実行するかどうか？
    // ifブロックを実行しない場合はelseブロックを実行する。
    if (variable) {
        output.innerHTML += "変数：True"
    }else{
        output.innerHTML += "変数：False"
    }
    output.innerHTML += "<br>"

    // if-else if-else文使い方。
    // variable >= 100とvariable >= 10が別のブロックになる。
    if (variable >= 100){
        output.innerHTML += "変数：100以上"
    }else if(variable >= 10){
        output.innerHTML += "変数：10以上100未満"
    }else{
        output.innerHTML += "変数：10未満"
    }
    output.innerHTML += "<br>"

    // 誤ったif-else if-else文使い方。
    // variable >= 10のブロックが実行されると
    // variable >= 100のブロックが実行されない。(なんの数字が来ても実行されない。)
    if (variable >= 10){
        output.innerHTML += "変数：10以上100未満"
    }else if(variable >= 100){
        output.innerHTML += "変数：100以上"
    }else{
        output.innerHTML += "変数：10未満"
    }
    output.innerHTML += "<br>"


     // switch-case文
     // break を書かないと、その後のケースが**連続して実行（フォールスルー）**されます。
    let num = 1;

switch (opt) {
  case 1:
    output.innerHTML +="1が選ばれました";
    break;
  case 2:
    output.innerHTML +="2が選ばれました";
    break;
  case 3:
    output.innerHTML +="3が選ばれました";
    break;
  default:
    output.innerHTML +="4が選ばれました";
}

}