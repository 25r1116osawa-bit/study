let output1 = document.getElementById('output1')
let output2 = document.getElementById('output2')
let output3 = document.getElementById('output3')
let output4 = document.getElementById('output4')
let output5 = document.getElementById('output5')
// 初期化式：for文に初めて訪れた時実行される。
// let index = 0;
// 条件式：条件式の判定がtrueだったとき、ブロックが実行される
// 増分式：ブロック実行後に実行され、後に条件式で判定を行う。


//課題1 
//for (let index = 1; index < 10; index++){
//    for(let j=1; j < 10; j++){
//        box = index * j
//        output1.innerHTML += box + " "
//    }
//}

// ansText = ''
// 先生の回答
let ansText = ''
for (let num1 = 1; num1 <= 9; num1++) {
    for (let num2 = 1; num2 <= 9; num2++) {
        // 計算結果の出力
        ansText += num1 * num2 + ','
    }
}

// 出力部分
output1.textContent += ansText



// 課題2
// 分からなかったこと：数字を文字に変換すること
// 解決策：https://qiita.com/ndj/items/ccc1b36933fc52483018 に変換した。

//for (let index = 1; index < 10; index++){
//    for(let j=1; j < 10; j++){
//        box = index * j
//           output2.innerHTML += String(index) + "*" + String(j) + "=" + box +" " +"<br>"
//    }
//}

// 計算部分
// テンプレートリテラルを使えば、''の中に${}をいれるだけで変数を呼び出すことができる。

ansText = ''
for (let num1 = 1; num1 <= 9; num1++) {
    for (let num2 = 1; num2 <= 9; num2++) {
        // 計算結果の出力
        ansText += `${num1}×${num2}=${num1 * num2}<br>`
    }
}

// 出力部分
output2.innerHTML += ansText




// 課題3 
// やりたいこと：1の段の出力が終わり次第、改行後に2行目が実行される。

ansText = ''
for (let num1 = 1; num1 <= 9; num1++) {
    for (let num2 = 1; num2 <= 9; num2++) {
        // 計算結果の出力
        ansText += num1 * num2 + ' '
    }
    ansText += '<br>'
}

// 出力部分
output3.innerHTML += ansText



// 課題4
// htmlで整える javascriptで整える
// 一桁の場合と二けたの場合で分岐すればいい。




// 計算部分
ansText = ''
for (let num1 = 1; num1 <= 9; num1++) {
    for (let num2 = 1; num2 <= 9; num2++) {
        let ans = num1 * num2
        if(ans <= 9){
            // 計算結果の出力 &nbsp は半角スペース
            ansText += ans + '&nbsp&nbsp&nbsp'
        }else{
            // 計算結果の出力
            ansText += ans + '&nbsp'
        }
    }
    ansText += '<br>'
}

// 出力部分
output4.innerHTML += ansText




// 課題5

// 計算部分
// 計算部分
let htmlText = ''
htmlText += '<table>'
for (let i = 0; i <= 9; i++) {
    htmlText += `<th>${i}</th>`
}
let hnum = 1
for (let num1 = 1; num1 <= 9; num1++) {
    htmlText += '<tr>'
    htmlText += `<th>${hnum++}</th>`
    for (let num2 = 1; num2 <= 9; num2++) {
        let ans = num1 * num2
        // 計算結果の出力
        htmlText += `<td>${ans}</td>`
    }
    htmlText += '</tr>'
}
htmlText += '</table>'
// 出力部分
output5.innerHTML += htmlText