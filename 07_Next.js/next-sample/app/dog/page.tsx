import GetDogImgs from '../compornents/dogcompornet'


const Home = () =>{

    return (
        <>
        <GetDogImgs />   {/* ← タグで呼び出す */}
        </>
    )
}

// Homeはlayout.tsxのchildrenに渡される。
export default Home;

