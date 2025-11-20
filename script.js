// 右側の表示エリア
const contentArea = document.getElementById("content-area");

// 各 li を取得
const items = document.querySelectorAll(".sidebar ul li");

// クリックイベント
items.forEach(item => {
  item.addEventListener("click", () => {

    const key = item.dataset.content;  // データ属性の値

    // 表示する内容を定義
    const contents = {

    

color: `
    <h2>color</h2>
    <p>文字の色を指定します。</p>
    <pre><code>color: red;</code></pre>
  `,
      
  width: `
    <h2>width</h2>
    <p>要素の横幅を指定します。</p>
    <pre><code>width: 200px;</code></pre>
  `,
height: `
    <h2>height</h2>
    <p>要素の高さを指定します。</p>
    <pre><code>height: 150px;</code></pre>
  `,
 
  width: `
    <h2>width</h2>
    <p>要素の横幅を指定します。</p>
    <pre><code>width: 200px;</code></pre>
  `,

top: `
    <h2>top</h2>
    <p>要素の上方向の位置を指定します。</p>
    <pre><code>top: 10px;</code></pre>
  `,

 right: `
    <h2>right</h2>
    <p>要素の右方向の位置を指定します。</p>
    <pre><code>right: 10px;</code></pre>
  `,

  bottom: `
    <h2>bottom</h2>
    <p>要素の下方向の位置を指定します。</p>
    <pre><code>bottom: 10px;</code></pre>
  `,

  flex: `
    <h2>flex</h2>
    <p>Flexbox の要素の比率や成長を指定します。</p>
    <pre><code>flex: 1;</code></pre>
  `,


  left: `
    <h2>left</h2>
    <p>要素の左方向の位置を指定します。</p>
    <pre><code>left: 10px;</code></pre>
  `,

padding: `
    <h2>padding</h2>
    <p>内側の余白を指定します。</p>
    <pre><code>padding: 10px;</code></pre>
  `,
  border: `
    <h2>border</h2>
    <p>要素の枠線を指定します。</p>
    <pre><code>border: 1px solid black;</code></pre>
  `,


margin: `
    <h2>margin</h2>
    <p>外側の余白を指定します。</p>
    <pre><code>margin: 10px 20px;</code></pre>
  `,

  height: `
    <h2>height</h2>
    <p>要素の高さを指定します。</p>
    <pre><code>height: 150px;</code></pre>
  `,
  
  html: `
    <h2>&lt;html&gt;</h2>
    <p>HTML文書全体を囲むルート要素です。</p>
    <pre><code>&lt;html&gt; ... &lt;/html&gt;</code></pre>
  `,

  head: `
    <h2>&lt;head&gt;</h2>
    <p>タイトル、CSS、メタ情報など「ページに表示しない情報」を入れます。</p>
    <pre><code>&lt;head&gt;
  &lt;title&gt;タイトル&lt;/title&gt;
&lt;/head&gt;</code></pre>
  `,

  body: `
    <h2>&lt;body&gt;</h2>
    <p>画面に表示されるコンテンツを入れる領域です。</p>
    <pre><code>&lt;body&gt;コンテンツ&lt;/body&gt;</code></pre>
  `,

  h1: `
    <h2>&lt;h1&gt;</h2>
    <p>最も重要な見出しを表すタグです。</p>
    <pre><code>&lt;h1&gt;見出し&lt;/h1&gt;</code></pre>
  `,

  h2: `
    <h2>&lt;h2&gt;</h2>
    <p>2番目に重要な見出しです。</p>
    <pre><code>&lt;h2&gt;サブタイトル&lt;/h2&gt;</code></pre>
  `,

  h3: `
    <h2>&lt;h3&gt;</h2>
    <p>3番目の階層の見出しです。</p>
    <pre><code>&lt;h3&gt;小見出し&lt;/h3&gt;</code></pre>
  `,

  p: `
    <h2>&lt;p&gt;</h2>
    <p>段落（パラグラフ）を作るタグです。</p>
    <pre><code>&lt;p&gt;文章&lt;/p&gt;</code></pre>
  `,

  br: `
    <h2>&lt;br&gt;</h2>
    <p>1行の改行を行います。</p>
    <pre><code>改行したい場所で &lt;br&gt; を使用。</code></pre>
  `,

  hr: `
    <h2>&lt;hr&gt;</h2>
    <p>水平線（区切り線）を表示します。</p>
    <pre><code>&lt;hr&gt;</code></pre>
  `,

  a: `
    <h2>&lt;a&gt;</h2>
    <p>リンクを作成するタグです。</p>
    <pre><code>&lt;a href="URL"&gt;リンク&lt;/a&gt;</code></pre>
  `,

  img: `
    <h2>&lt;img&gt;</h2>
    <p>画像を表示するタグです。</p>
    <pre><code>&lt;img src="画像URL" alt="説明文"&gt;</code></pre>
  `,

  ul: `
    <h2>&lt;ul&gt;</h2>
    <p>順不同リスト（番号なし）を作ります。</p>
    <pre><code>&lt;ul&gt;
  &lt;li&gt;項目&lt;/li&gt;
&lt;/ul&gt;</code></pre>
  `,

  ol: `
    <h2>&lt;ol&gt;</h2>
    <p>番号付きリストを作ります。</p>
    <pre><code>&lt;ol&gt;
  &lt;li&gt;項目&lt;/li&gt;
&lt;/ol&gt;</code></pre>
  `,

  li: `
    <h2>&lt;li&gt;</h2>
    <p>リストの項目を作るタグです。</p>
    <pre><code>&lt;li&gt;項目&lt;/li&gt;</code></pre>
  `,

  div: `
    <h2>&lt;div&gt;</h2>
    <p>ブロック要素をまとめるコンテナです。</p>
    <pre><code>&lt;div&gt;内容&lt;/div&gt;</code></pre>
  `,

  span: `
    <h2>&lt;span&gt;</h2>
    <p>インライン要素をまとめるタグです。</p>
    <pre><code>&lt;span&gt;文字&lt;/span&gt;</code></pre>
  `,

  table: `
    <h2>&lt;table&gt;</h2>
    <p>表を作るためのタグです。</p>
    <pre><code>&lt;table&gt;...&lt;/table&gt;</code></pre>
  `,

  tr: `
    <h2>&lt;tr&gt;</h2>
    <p>表の行を定義します。</p>
    <pre><code>&lt;tr&gt;...&lt;/tr&gt;</code></pre>
  `,

  td: `
    <h2>&lt;td&gt;</h2>
    <p>表のセル（データ）を表します。</p>
    <pre><code>&lt;td&gt;データ&lt;/td&gt;</code></pre>
  `,

  th: `
    <h2>&lt;th&gt;</h2>
    <p>表のヘッダーセル（見出し）を表します。</p>
    <pre><code>&lt;th&gt;見出し&lt;/th&gt;</code></pre>
  `,

  form: `
    <h2>&lt;form&gt;</h2>
    <p>入力フォーム全体を囲むタグです。</p>
    <pre><code>&lt;form action="" method=""&gt;...&lt;/form&gt;</code></pre>
  `,

  input: `
    <h2>&lt;input&gt;</h2>
    <p>フォームの入力項目（テキスト・ボタンなど）を作ります。</p>
    <pre><code>&lt;input type="text"&gt;</code></pre>
  `,

  button: `
    <h2>&lt;button&gt;</h2>
    <p>ボタンを作るタグです。</p>
    <pre><code>&lt;button&gt;送信&lt;/button&gt;</code></pre>
  `,

  label: `
    <h2>&lt;label&gt;</h2>
    <p>フォーム入力に対する説明ラベルです。</p>
    <pre><code>&lt;label for="id名"&gt;名前&lt;/label&gt;</code></pre>
  `,

  textarea: `
    <h2>&lt;textarea&gt;</h2>
    <p>複数行のテキスト入力欄を作ります。</p>
    <pre><code>&lt;textarea rows="4"&gt;&lt;/textarea&gt;</code></pre>
  `
  

};


    // 右側に内容を書き換え
    contentArea.innerHTML = contents[key] || "内容がありません。";
  });
});
