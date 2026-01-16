
const output = document.getElementById('output');
const companySelect = document.getElementById('company_select');

// JSONを読み込んで表示する関数
function loadJSON(path) {
  fetch(path)
    .then(res => res.json())
    .then(data => showMembers(data))
}

// データを画面に表示する
function showMembers(data) {
  output.innerHTML = ''; // 前回の内容をクリア

  // JSONが配列か members プロパティかで分岐
  const members = data.members || data;

  members.forEach(m => {
    const div = document.createElement('div');
    div.className = 'member';
    div.innerHTML = `
      <p>名前: ${m.name}</p>
      <p>年齢: ${m.age}</p>
    `;
    output.appendChild(div);
    
  });
}

// 初期表示はドラクエ
loadJSON('../data/data.json');

// ボタン押したら選択に応じて読み込み
document.getElementById('load-btn').addEventListener('click', () => {
  if (companySelect.value === 'dq') {
    loadJSON('../data/data.json');
  } else {
    loadJSON('../server/data/employees.json');
  }
});


