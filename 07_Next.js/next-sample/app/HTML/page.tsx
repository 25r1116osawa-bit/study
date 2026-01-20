import { NextPage } from "next";

const Home: NextPage = () => {
const htmlTags = [
  {
    tag: "<div>",
    description: "ブロック要素。レイアウトの箱として使う",
    example: "<div>内容</div>",
    category: "レイアウト",
  },
  {
    tag: "<span>",
    description: "インライン要素。文章の一部を装飾する",
    example: "<span>文字</span>",
    category: "テキスト",
  },
  {
    tag: "<a>",
    description: "リンクを作成する",
    example: '<a href="https://example.com">リンク</a>',
    category: "リンク",
  },
];

  return (
    <div>
      <h1>HTML 便利タグ集</h1>

      <ul>
        {htmlTags.map((item, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <h2>{item.tag}</h2>
            <p>{item.description}</p>

            <pre>
              <code>{item.example}</code>
            </pre>

            <small>カテゴリ：{item.category}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
