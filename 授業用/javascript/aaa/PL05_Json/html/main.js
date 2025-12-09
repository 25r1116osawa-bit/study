// 1. 画面の箱を取る
let output = document.getElementById('output');

// 2. JSONを読み込む非同期処理

function loadJSON() {
  fetch('../data/data.json')  // JSON ファイルをローカルファイルから取りに行く
    .then(response => response.json()) //  → 文字列の JSON を JavaScript で使えるオブジェクトに変換
    .then(handleData)                  //  データを次の関数に渡す
}


// 3. データを受け取って処理する関数
 function handleData(data) {   //変換されたデータが data に入る
  let members = data.members;  // .membersデータを入れる箱、値を保持する
  showMembers(members);        // 別の関数で画面に出す
 }

// 4. 配列を画面に出す関数
 function showMembers(members) {
  for (let i = 0; i < members.length; i++) {
    let member = members[i];
    output.innerHTML += '名前: ' + member.name ;
    output.innerHTML += '年齢: ' + member.age  + '<br>';
    
  }
}
// ページが読み込まれたらJSONを取りに行く
document.addEventListener('DOMContentLoaded', loadJSON);

/*
let output = document.getElementById('output');
let companySelect = document.getElementById('company_select');

function loadJSON(path) {
  fetch(path)
    .then(res => res.json())
    .then(showMembers)
    .catch(err => console.error(err));
}

function showMembers(data) {
  output.innerHTML = ''; // 前回の内容をクリア
  let members = data.members;

  for (let i = 0; i < members.length; i++) {
    let m = members[i];
    let div = document.createElement('div');
    div.className = 'member';
    div.innerHTML = `
      <p>名前: ${m.name}</p>
      <p>年齢: ${m.age}</p>
    `;
    output.appendChild(div);
  }
}

// 最初はドラクエを表示
loadJSON('../data/data.json');

document.getElementById('load-btn').addEventListener('click', function() {
  if (companySelect.value === 'dq') {
    loadJSON('../data/data.json');
  } else {
    loadJSON('../server/data/employees.json');
  }
});
*/