import Link from "next/link"

const Home = () => {
    return (
    <>
        <h1>TOPページです！</h1>
        <Link href="sample">サンプル1</Link>
        <Link href="sample/sample2">サンプル2</Link>
        <Link href="dog">犬</Link>
    </>
)
}

export default Home;


// 犬リンクをクリックすると、犬の画像を取得して表示するページを作成してください。

// Next.jsでは、全体レイアウト、ページレイアウト、コンポーネントを分けることで開発しやすくなっている。
// しかし、一定のルールに従う必要があるため、学習コストは高くなります。
// 今日出てきたものとしては、page.tsxとlayout.tsxです。
// 階層化する＝URLが変わる点も今回の注目ポイントです。