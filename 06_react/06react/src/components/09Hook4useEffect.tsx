// 副作用フック
// 無限ループが発生する可能性がある。

import {useEffect,useState } from "react";

// useEffectは画面の描写が終わった後に走る。
// uselayouteffectは画面の描写前に実行する。


const endpoint = "https://dog.ceo/api/breeds/image/random"

interface DogAPIResponse {
    message:string;
    status:string;
}


// 非同期通信メソッド
// asyncは独立してgetDogimg返事が関数の返事が返ってこなくても続きの処理を実行する。
const getDogImg = async () =>{
    
    let result: DogAPIResponse
    try{
        const res = await fetch(endpoint)
        result = await res.json()
    }catch(err){
        result = {message:'',status:'error'}
    }
    return result
}


const Hook4 = () =>{
    
    const [dogImage,setDogimage] = useState("")
   
    // Effectフックの引数は関数である。
    useEffect(()=>{
        getDogImg().then((data)=>{
            setDogimage(data.message)
    })
    },[])

    return(
        <div>
            {
                dogImage != '' ? (
                    <img src={dogImage} />
                ) : (
                    <p>通信失敗</p>
                )
            }
        </div>
    )

}

export default Hook4