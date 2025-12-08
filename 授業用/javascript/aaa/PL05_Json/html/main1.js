function loadJSON() {
  fetch('../data/data.json')
    .then(res => res.json())
    .then(dq);  // ← ここに直接つなぐ
}

function dq(data) {
  console.log(data);  // ここで出るはず
}



function loadJSON1() {
  fetch('../server/data/employees')  // サーバー上の絶対パス
    .then(res => res.json())
    .then(pkmn)
    .catch(err => console.error(err));
}

function pkmn(data) {
  console.log(data);
}

/*
function loadJSON2() {
  fetch('../server/data/employees')
    .then(res => res.json())
    .then(function(data) {
      console.log(data);
    });
}
*/


/* 
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
*/

document.addEventListener('DOMContentLoaded', loadJSON);
