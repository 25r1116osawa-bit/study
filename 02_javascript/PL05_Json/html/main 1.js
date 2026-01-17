/*
1. 画面の箱を取る
let output = document.getElementById('output');

 2. JSONを読み込む非同期処理

function loadJSON() {
  fetch('../data/data.json')  JSON ファイルをローカルファイルから取りに行く
    .then(response => response.json())   → 文字列の JSON を JavaScript で使えるオブジェクトに変換
    .then(handleData)                   データを次の関数に渡す
}


 変数名：handleData()
 3. データを受け取って処理する関数
 function handleData(data) { 変換されたデータが data に入る
  let members = data.members;   .membersデータを入れる箱、値を保持する
  showMembers(members);         別の関数で画面に出す
 }

 4. 配列を画面に出す関数
 function showMembers(members) {
  for (let i = 0; i < members.length; i++) {
    let member = members[i];
    output.innerHTML += '名前: ' + member.name ;
    output.innerHTML += '年齢: ' + member.age  + '<br>';
    
  }
}
 ページが読み込まれたらJSONを取りに行く
document.addEventListener('DOMContentLoaded', loadJSON);
*/

let output = document.getElementById('output');

// 1. JSONを読む
function loadJSON() {
  fetch('../data/data.json')
    .then(res => res.json())
    .then(showMembers);  // ← ここに直接つなぐ
}

// 2. 画面に出す
function showMembers(data) {
  let members = data.members;

  // 毎回つなげるのではなく、1人分ずつブロックで追加
  for (let i = 0; i < members.length; i++) {
    let m = members[i];

    // ① 1人分のブロックを作る
    let div = document.createElement('div');
    div.className = 'member';

    // ② 中身（文字）
    div.innerHTML = `
      <p>名前: ${m.name}</p>
      <p>年齢: ${m.age}</p>
    `;

    // ③ output に追加
    output.appendChild(div);
  }
}

// 最初に読み込む
document.addEventListener('DOMContentLoaded', loadJSON);
