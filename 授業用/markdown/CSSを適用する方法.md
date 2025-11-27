## □CSSファイルを読み込んで適用させる


1つめは、「.css」の拡張子がついたCSSファイルを作成し、それをHTMLへ適用させる方法
<br><br>

【適用手順】
```
ヘッダーの内側に、以下を設定する。
<link rel="stylesheet" href="○○○○○○○○○○.css">


```

<br><br>
呼び出し元と同じ階層にある場合：
例）herf="style.css"

プロジェクトフォルダー
    └index.html(呼び出し元ファイル)
    └style.css

<br><br>

呼び出し元が同一階層の別のフォルダーにある場合：
例）image/style.css

プロジェクトフォルダー
    └index.html(呼び出し元ファイル)
    └image
        └style.css

<br><br>
呼び出し元と階層が異なる別のフォルダーにある場合：     
例） ../image/style.css

プロジェクトフォルダー
    └TOP
        └index.html(呼び出し元ファイル)
    └image
        └style.css

<br>
<hr>


## □HTMLファイルの&le;head&gt;に&lt;style&gt;タグで指定する
二つ目はHTMLファイル内のhead内にcssを書き込む方法

他のHTMLファイルには適用されないので、注意が必要

```
<head>
    <style>
        h1{ color: #f00; }
        p{ font-size: 18px; }
    </style>
</head>
```
<br>
<hr>
<br>

## □HTMLタグの中にstyle属性を指定する

<p>3つ目はHTMLタグに直接CSSを書き込む方法</p>


```
<body>
<h1 style="color: #f00;>猫の一日 </h1>
<p style="font-size: 18px;>ひたすら寝ています。</p>

</body>
```




