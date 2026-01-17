Reactの基本整理
■ App.tsx について

App.tsx もコンポーネントの一部である

多くの場合、アプリの一番大きな親コンポーネントになる

■ npm run start
npm run start


Node.js プロジェクトで定義された「起動用コマンド」を実行する命令

実際に何が起きるかは package.json の scripts.start に書かれている内容次第

Reactでは、開発用サーバーを起動するのが一般的

■ tsxファイルとは？
ts → TypeScript
x → JSX（HTMLのように書ける構文）


TypeScript + JSX を書けるファイル

HTMLを直接書いているわけではない

■ JSXの正体
tsx
<h1>こんにちは</h1>

内部的には（イメージ）
React.createElement("h1", null, "こんにちは")


JSXは 最終的に JavaScript のコードに変換される

ブラウザが読むときは 純粋なJavaScript

■ render（レンダー）について
render の意味

render = 描画（画面に表示すること）

■ コンポーネントをどこに配置するか

❌「render で各（書き方が不明確）」
⭕ 「どこに表示するかは root.render で決まる」

■ index.tsx の役割
root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);


<Hello /> を追加すると、そのコンポーネントが画面に描画される

HTML の div id="root" の中に表示される

ここは Reactアプリの入口

■ React は reactive（反応する）

データの変化に反応して、画面が自動で更新される

state や props が変わると再レンダーされる

■ onClick について（修正あり）

❌ 今までは div に onclick は設定できなかった
⭕ 通常のHTMLでも onclick は設定できる

<div onclick="alert('click')"></div>


ただし React では👇

<div onClick={() => alert("click")}></div>


JavaScriptの関数として安全に扱える

状態（state）と連動できる

管理しやすい

👉 Reactの強みは「イベント」と「状態」を一体で扱えること

最終まとめ（整理版）

App.tsx はコンポーネント

tsx は TypeScript + JSX

JSX は最終的に JavaScript になる

render は 画面に描画する仕組み

root.render() は どこに表示するかを決める

Reactは データの変化に反応するUIライブラリ


props = {
  text: "こんにちは"
}
分割代入
ts
コードをコピーする
const { text } = props;
結果は👇

ts
コードをコピーする
const text = props.text;