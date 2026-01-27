import Link from "next/link"
import Image from "next/image";


const Home = () => {

    


    return (
     
     <div className="container">

    <aside className="sidebar">
      <div className="sidebar-header">📘 Learn Panel</div>

      <div className="sidebar-body">
        <ul className="parent">
          <li>
            HTML
            <ul className="child">
              <li data-file="ショートカットキー.md">ショートカットキー</li>
              <li data-file="基本タグ.md">基本タグ</li>
              <li data-file="グローバルナビ.md">グローバルナビ</li>
              <li data-file="グループ分け.md">グループ分け</li>
              <li data-file="フォーム.md">フォーム</li>
            </ul>
          </li>
        </ul>

        <ul className="parent">
          <li>
            CSS
            <ul className="child">
              <li data-file="フォント.md">フォント</li>
              <li data-file="CSSを適用する方法.md">CSSを適用する方法</li>
              <li data-file="CSSの基本の書き方.md">基本の書き方</li>
              <li data-file="CSSフレームワーク.md">フレームワーク</li>
            </ul>
          </li>
        </ul>

        <ul className="parent">
          <li>
            VSCode
            <ul className="child">
              <li data-file="live share.md">Live Share</li>
              <li data-file="ブランチ.md">ブランチ</li>
            </ul>
          </li>
        </ul>

        <ul className="parent">
          <li>
            javascript
            <ul className="child">
              <li data-file="javascript基礎.md">基礎</li>
              <li data-file="Domの構造.md">Domの構造</li>
            </ul>
          </li>
        </ul>


      </div>
    </aside>

 
    <main className="content markdown-body" id="content-area">
      左の項目をクリックすると説明が表示されます。
    </main>

  </div>
      
    )
}
// Homeはlayout.tsxのchildrenに渡される。
export default Home;

