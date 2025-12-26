# JavaScriptの動作方法
- JavaScript特有の話
- JavaScriptには動作する方法が大きく分けると3つ
  1. コンソール
  2. HTML埋め込み
     1. scriptタグ
     2. イベント属性に埋め込み
  3. JSファイルの読み込み

## コンソール(対話型インタプリタ)
ブラウザのコンソールを用いて対話形式でプログラムの実行を行うことができる。
※コードの詳細は01_HelloWorldを参照

## HTMLの埋め込み
- ※html.htmlを参照
1. scriptタグで囲まれた領域にJavaScriptを記載
   - scriptタグを記述するタイミングで動作が異なるので注意
2. イベントハンドラにJavaScriptを埋め込む

## JSファイルの読み込み
- ※import.htmlとscript.jsを参照
- JSファイルにJavaScriptのコードを記述する
- HTMLファイルにscriptタグでJSファイルをインポートする