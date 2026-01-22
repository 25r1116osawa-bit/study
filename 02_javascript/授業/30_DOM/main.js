// 出力先の要素を習得

let output = document.getElementById('output');
let button = document.getElementById('button');

button.addEventListener('click', () => {
  output.innerText = "aiueo";
});


// // どの要素を？
// // 対象の指定方法
// document.getElementById

// document.getElementsByName

// document.getElementsByTagNameNS
// // CSSセレクターを利用して指定
// document.querySelector
// document.querySelectorAll

// // いつ実行する？
// // イベントの指定方法

// // htmlにonclick等のイベント属性にJavascriptを埋め込む
// // 例：<input type="button" value="実行" onclick="click()">

// // 要素へイベントを追加する方法
// 例：clickがイベント名
// output.addEventListener('click', () => {});
button.addEventListener('click', () => output.innerText = "aiueo");
// DOM操作(生成と配置)
// 要素を生成
// let element01 = document.createElement('ul')
// let element02 = document.createElement('li')

// // 要素の編集
// element02.textContent = "あいうえお"

// // 要素を配置
// element01.appendChild(element02)
// output.appendChild(element01)

// // 要素を削除
// // element01.remove()


