// counterボタンを押すと1づつ増える。
// 参考にしたサイト：https://zenn.dev/yumix/articles/aad5753f1c9da6
import { useState } from "react"

const Counter01 = () => {
    // ステータスフックの設定(counter)
    let [count,setValue] = useState(0);
    
    
    // クリックアクション(コールバック関数)
    let test = () => {
        setValue(count+1)
    }
    
    return (
    <div>
        カウンター：{count}
        <input type="button" value="加算" onClick={test} />
    </div>
    )
}

export default Counter01

