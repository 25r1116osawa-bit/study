import { useState } from "react"

const Hook2 = () => {

    // ステートフック
    const [value,setValue] = useState('')

    const onClick = () =>{
        // データが変わっても画面が更新されないため、見た目に変化はない
        setValue('あいうえお')
        alert('aaaa')
    }

    return (
        <div>
            <input type="button" value="ぼたん" onClick={onClick} />
            <input type="text" value={value}/>
        </div>
    )
}
export default Hook2
