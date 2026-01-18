import { useState } from "react"

const Hook2 = () => {

    // ステートフック
    const [value, setValue] = useState('')

    const onClick = () => {
        setValue(value + "a")

    }

    return (
        <>
        <div>
            <p>aaaa</p>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
            <button onClick={onClick}>aaa</button>
         </div>
         </>
    )
}
export default Hook2
