import { useState } from "react"

const useCounter = () => {
const [count, setCount] = useState(0)
return [count,setCount]
}


const Counter03 = () => {
    const [countState, plusCount] = useCounter()

    
    return (
        <div>
            <p>Count: {countState}</p>
            <button onClick={plusCount}>カウントアップ</button>
        </div>
    )
}

export default Counter03