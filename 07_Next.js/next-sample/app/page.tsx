import Link from "next/link"

const Home = () => {
    return (
    <>
        <h1>TOPページです！</h1>
        <Link href="sample">サンプル1</Link>
        <Link href="sample2">サンプル2</Link>
        <Link href="dog">犬</Link>
    </>
)
}
// Homeはlayout.tsxのchildrenに渡される。
export default Home;

