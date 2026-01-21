```
1. 何のために使うか
document.getElementById('p1')


HTMLの中の 特定の要素を取得 したいときに使います

「この文字を書き換えたい」「このボタンを押したとき動きを変えたい」など、特定の要素にアクセスするときに必須です

例：

<p id="p1">ここに文字が入ります</p>
<button onclick="click1()">押してね</button>

function click1() {
    document.getElementById('p1').textContent = "ボタンが押されました！";
}


→ ボタンを押すと、id="p1" の <p> の文字が変わります

2. よく使う場面

文字を書き換えるとき

ボタンや画像などの見た目や内容を変えるとき

ユーザーの入力に応じてページを更新するとき

3. 注意点

ID はページ内で一意（同じ ID は1つしか使えない）

小文字と大文字を区別する → getElementById が正しい
```

```
function handleData(data) { //変換されたデータが data に入る
  let members = data.members;  // .membersデータを入れる箱、値を保持する
  showMembers(members);        // 別の関数で画面に出す
}

function handleData(data) { //変換されたデータが data に入る
  showMembers(members);        // 別の関数で画面に出す
}
上記は全く同じ動きをする。
「箱に一旦入れるか」「直接渡すか」の違いだけ
```

