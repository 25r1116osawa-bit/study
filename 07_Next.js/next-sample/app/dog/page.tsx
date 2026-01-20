import GetDogImgs from '../compornent/dogcompornet'


const Home = () =>{

    return (
        <>
        <GetDogImgs />   {/* ← タグで呼び出す */}
        </>
    )
}

// Homeはlayout.tsxのchildrenに渡される。
export default Home;

