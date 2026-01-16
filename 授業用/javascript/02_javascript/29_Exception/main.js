// 出力先の要素を習得
let output1 = document.getElementById('output')
let output2 = document.getElementById('output2')


// 例外処理 F12で要素を確認する
// エラーが2種類ある。
// 構文エラー（シンタックスエラー）：構文に問題がある


// 構文エラー、実行時エラーがでないが思ったものとは違うエラー：バグ
// output1.innerHTML += "存在する"+ '<br>'
// output1.innerHTML += "存在する"+ '<br>'
// // 実行時エラー（今回のエラー）：構文に問題がない。
// // 実行時エラーの特徴で実行時エラーが出てる場合は、それ以降の内容が出ない
// output2.innerHTML += "存在する"+ '<br>'
// output1.innerHTML += "存在する"+ '<br>'


// 例外処理の基本 try catch error
// トライで行った内容でエラーが発生した際に、catchへ飛ぶ
// finallyは何があっても実行される
// DBは接続＞処理＞切断 の工程が必要で、切断を必ず入れることを推奨する。

try {
    // 例外が発生しうる処理
    output1.innerHTML += "存在する" + '<br>'
    // 実行するとエラーが発生する。
    output2.innerHTML += "存在しない" + '<br>'
    output1.innerHTML += "存在する" + '<br>'
    output1.innerHTML += "存在する" + '<br>'
} catch (error) {
    // 例外が発生した時
    output.innerHTML += "エラー対応済み" + '<br>'
}finally{
    // 何があっても実行される
    output.innerHTML += '<br>ファイナリー<br>'
}

// 例外処理を作る
function div(num1,num2){
    if(num2 == 0){
        throw new Error('0では割れません。')
    }
    return num1 / num2
}

try {
    output.innerHTML += div(3,0)
} catch (error) {
    // errorにはエラーの情報が入っている。(本来コンソールに出る予定だったもの)
    output.innerHTML += error.message
} finally{
    output.innerHTML += '<br>ファイナリー<br>'
}