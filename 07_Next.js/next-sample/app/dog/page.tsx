import Link from "next/link";
import GetDogImgs from "../components/DogImage";
import DogBreedListSelector from "../components/DogBreedList";
import DogBreedTest from "../components/DogBreedTest";



const Home = () =>{

    return (
        <>
        <h1>DOGページです！</h1>
            <ul>
                <li><Link href="dog/random">ランダム</Link></li>
                <li><Link href="dog/breed/hound">hound TEST</Link></li>
            </ul>
        <p>aa</p>
        <GetDogImgs />   {/* ← タグで呼び出す */}
        <DogBreedListSelector/>
        <DogBreedTest/>
        </>
    )
}

// Homeはlayout.tsxのchildrenに渡される。
export default Home;

