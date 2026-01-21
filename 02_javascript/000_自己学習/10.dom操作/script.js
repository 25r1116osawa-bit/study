// よく使うdom操作順

// 1.dom要素の取得
// 一つづつ取得
const title = document.querySelector('h1');
const btn = document.querySelector('.btn');
const input = document.querySelector('#name');

// すべて取得
document.querySelectorAll("li");


// 2.テキストを変更する
title.textContent = 'こんにちは';


// 3.クラスを操作する（超よく使う）モーダル / アコーディオン / ドロワー
box.classList.add('active');
box.classList.remove('active');
box.classList.toggle('active');
box.classList.contains('active'); // true / false

// 4. イベントを扱う
btn.addEventListener('click', () => {
  alert('クリックされた');
});


// 5. inputの値取得
input.addEventListener('input', () => {
  console.log(input.value);
});

// 6.要素を作成・追加する
const li = document.createElement('li');
li.textContent = '新しい項目';

ul.appendChild(li);

// 7. 要素を削除する
li.remove();

ボタンで表示・非表示
btn.addEventListener('click', () => {
  box.classList.toggle('hidden');
});
css
コードをコピーする
// .hidden {
//  display: none;
// }


/*DOMは「操作」より「流れ」

要素取得

イベント発火

クラス or 値変更

これを毎回意識すると一気に上達します。*/


// 自分自身から親方向にたどって条件に合う一番近い要素を取得
const completeTarget = completeButton.closest("li");

/*
<li>
  <div>
    <button>完了</button> ← ここから li を探す
  </div>
    </li>
*/

// 次に並んでいる兄弟要素を取得
completeButton.nextElementSibling.remove();
/*
<button>完了</button>
<button>削除</button> ← nextElementSibling
*/

// 子要素の中で最初の要素を取得
completeTarget.firstElementChild.appendChild(backButton);

removeChild()
document
  .getElementById("incompleate-list")
  .removeChild(deletTarget);

// 実はこれ…
deletTarget.remove();