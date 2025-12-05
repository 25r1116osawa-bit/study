// コンソール上におはようと表示。
/*
console.log('おはようございます');


let num = 2;


// num は0より小さいですか？　
console.log(num < 0);

// num は0より大きいですか？
console.log(num > 0);

// if文でよく使う。
// 変数と関数の見分け方　
// ()がついているものはプログラムで()の中にデータをいれている。

num = 10


if (num > 0) {
    console.log('さようなら');
} else {
    console.log('眠い')
}


// i++にはセミコロンが不要
for (let i = 0; i <= 4; i++) {
    console.log(i + 1);
}


// 代入式 i++ 
for (let i = 0; i <= 4; i++) {
    console.log(i++);
}

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log("おはよう"); // 3, 6, 9 のときに表示
    } else {
        console.log(i); // 3の倍数でないときに表示
    }
}


const targets = [3, 6, 9];

for (let i = 1; i <= 10; i++) {
    if (targets.includes(i)) {
        console.log("おはよう");
    } else {
        console.log(i);
    }
}


// || はor 
for (let i = 1; i <= 10; i++) {
    if (i / 3 == 1 || i / 3 == 2 || i / 3 == 3) {
        console.log("おはよう");
    }
    else {
        console.log(i);
    }
}

// %は余り。
let i = 3
console.log(i % 3 == 0);


for (let i = 0; i < 10; i++) {
    let ss = i + 1;
    if (ss % 3 == 0) {
        console.log("aaaa")
    } else {
        console.log(ss);
    }
    console.log('正常に処理しました。')
}

// DOMの読み込み完了を待ってから処理を開始
document.addEventListener("DOMContentLoaded", function () { // ここも従来の関数式に変更

    // 1. 操作したいHTML要素を取得する
    const button = document.querySelector('#greetButton');
    const messageArea = document.querySelector('#messageArea');

    // 2. 取得したボタンに「クリックされたとき」の処理を設定する
    // 従来の関数式でコールバック関数を記述
    button.addEventListener('click', function () {

    // 3. クリックされたら、メッセージエリアの内容を書き換える
    messageArea.textContent = 'おはよう';

    });
});


// 関数宣言のため、変数の宣言は不要である。
// 関数宣言をすると、自動的に その関数名 (aisatu) が変数のように扱えるオブジェクトとしてメモリに登録 されます。

function aisatu(){
    console.log("ごめんなさい")
    console.log("ありがとう")
}

aisatu();



// 引数
// イメージ   function aisatu(name)
// aisatu("大澤")をnameに送る。

function aisatu(name){
    console.log("私の名前は"+name);
}

aisatu("大澤");



let str ="小林 "
aisatu(str);



// 戻り値 引数 の違いを理解する。
function aisatu(){
    return 2;
}
console.log(aisatu(5));

*/


function aisatu(num1){
    return num1;// 戻り値 引数 の違いを理解する。

}
// aisatu(1,2);==1+2=3

console.log(aisatu(2));




function aisatu(num1,num2){
    return (num1 + num2);// 戻り値 引数 の違いを理解する。

}
// aisatu(1,2);==1+2=3

console.log(aisatu(110,200));











function aisatu(num1,num2){
    return  (num1 + num2);
    
}
let result = aisatu(110,120)
console.log(result);

