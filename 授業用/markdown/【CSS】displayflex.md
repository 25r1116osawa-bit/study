## CSS未割当

<header>
    <div>ロゴイメージ</div>
     <ul>
        <li>テスト</li>
        <li>テスト</li>
    </ul>
</header>    
<br>

HTML
```
<header>
    <div>ロゴイメージ</div>
     <ul>
        <li>テスト</li>
        <li>テスト</li>
    </ul>
</header>

```
---


### divとul要素を横並び


<header style=display:flex>
    <div>ロゴイメージ</div>
     <ul >
        <li>テスト</li>
        <li>テスト</li>
    </ul>
</header>    
<br>

```
<header style=display:flex>
    <div>ロゴイメージ</div>
     <ul >
        <li>テスト</li>
        <li>テスト</li>
    </ul>
</header>    
<br>
```

### ul要素以下を横並び


<header style=display:flex>
    <div>ロゴイメージ</div>
     <ul style=display:flex>
        <li>テスト</li>
        <li>テスト</li>
    </ul>
</header>    
<br>

```
<header style=display:flex>
    <div>ロゴイメージ</div>
     <ul >
        <li>テスト</li>
        <li>テスト</li>
    </ul>
</header>    
<br>
```


---
文字が重なってしまうため、間隔をあけて黒丸を消す。

<header style="display:flex;justify-content:space-between;align-items: center;">
    <div>ロゴイメージ</div>
     <ul style="display:flex;gap:30px;list-style:none;margin:0px;">
        <li>テスト</li>
        <li>テスト</li>
    </ul>
</header>    

```
<header style="display:flex;justify-content:space-between;align-items: center;">
    <div>ロゴイメージ</div>
     <ul style="display:flex;gap:30px;list-style:none;margin:0px;">
        <li>テスト</li>
        <li>テスト</li>
    </ul>
</header>    
```