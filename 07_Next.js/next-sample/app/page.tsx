import Link from "next/link"
import Image from "next/image";


const Home = () => {

    const article = [
        { src: "/HTML.jpg", title: "HTML学習内容", alt: "HTMLのロゴ画像" },
        { src: "/CSS.jpg", title: "CSS学習内容", alt: "CSSのロゴ画像" },
        { src: "/JS.jpg", title: "JS学習内容", alt: "JSのロゴ画像" },
        { src: "/GitHub.jpg", title: "GitHub学習内容", alt: "GitHubのロゴ画像" },
        { src: "/React.jpg", title: "React学習内容", alt: "Reactのロゴ画像" },
        { src: "/Python.jpg", title: "Python学習内容", alt: "Pythonのロゴ画像" }
    ]


    return (
        <>
     
            <h1>TOPページです！</h1>
            <ul>
            
           <li> <Link href="sample">サンプル1</Link></li>
           <li> <Link href="sample2">サンプル2</Link></li>
           <li> <Link href="dog">犬</Link></li>
           <li> <Link href="HTML">HTML TEST</Link></li>
            </ul>
            <ul>
                <li><Link href="rendering/SSG">SSG</Link></li>
                <li><Link href="rendering/SSR">SSR</Link></li>
                <li><Link href="rendering/CSR">CSR</Link></li>
                <li><Link href="rendering">レンダリング確認ページ</Link></li>
                <li><Link href="transition">画面遷移データ受けわたし。確認ページ</Link></li>

            </ul>

            <div id="pickup" className="wrapper">

                {article.map((article, index) => (

                    <article key={index}>
                        <Image
                            src={article.src}
                            alt={article.alt}
                            width={150}
                            height={150}
                            className="article-image"
                        />
                        <h2 className="article-title">{article.title}</h2>
                        <div className="readmore"><a href="">READ MORE</a></div>
                    </article>

                ))}


            </div>

        </>
    )
}
// Homeはlayout.tsxのchildrenに渡される。
export default Home;

