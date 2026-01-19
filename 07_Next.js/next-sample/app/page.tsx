import Link from "next/link"
import Image from "next/image";

const Home = () => {
    return (
        <>
            <h1>TOPページです！</h1>
            <Link href="sample">サンプル1</Link>
            <Link href="sample2">サンプル2</Link>
            <Link href="dog">犬</Link>

            <div id="pickup" className="wrapper">
                <article>
                    <Image
                        src="/HTML.png"   // public フォルダ以下のパス
                        alt="テキストテキストテキスト"
                        width={150}              // 必須
                        height={150}             // 必須
                        className="article-image"
                    />
                    <h2 className="article-title">テスト</h2>
                    <div className="readmore"><a href="#">READ MORE</a></div>
                </article>

                <article>
                    <Image
                        src="/HTML.png"   // public フォルダ以下のパス
                        alt="テキストテキストテキスト"
                        width={150}              // 必須
                        height={150}             // 必須
                        className="article-image"
                    />
                    <h2 className="article-title">テスト</h2>
                    <div className="readmore"><a href="#">READ MORE</a></div>
                </article>

                <article>
                    <Image
                        src="/HTML.png"   // public フォルダ以下のパス
                        alt="テキストテキストテキスト"
                        width={150}              // 必須
                        height={150}             // 必須
                        className="article-image"
                    />
                    <h2 className="article-title">テスト</h2>
                    <div className="readmore"><a href="#">READ MORE</a></div>
                </article>
            </div>

        </>
    )
}
// Homeはlayout.tsxのchildrenに渡される。
export default Home;

