// カスタムフックでuseCounterを作成して下さい。

import { useState } from "react"

const useCounter = (): [number, () => void] => {
    const [countState,setCount] = useState(0)
    const plusCount = () =>{
        setCount(prev => prev+1)
    }

    return [countState,plusCount]
}

const Counter03 = () => {
    const [countState,plusCount] = useCounter()
    
    return (
        <div>
            <p>Count:{countState}</p>
            <button onClick={plusCount}>カウントアップ</button>
        </div>
    )

}
export default Counter03

// usestate useEffect customHook
// useredhuser 
