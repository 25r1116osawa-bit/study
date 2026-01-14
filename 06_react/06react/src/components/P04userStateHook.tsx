/*リデューサーで以下のアクションを追加
カウンターに以下３つ
加算
減算
リセット
*/

import { useReducer } from "react"




// アクションの型定義
type CounterAction  = 'ADD_BUTTUN' | 'minus_BUTTUN'| 'delete_BUTTUN'


// リデューサー関数
const ButtonReducer = (state:number , action:CounterAction) => {
    switch (action) {
        case 'ADD_BUTTUN':
            return  state + 1

        case 'minus_BUTTUN':
            return  state - 1
            
        case 'delete_BUTTUN':
            return  state = 0

        default:
           return state
    }
}


const Counter02 = () => {
 // 第1引数：reducer 関数
 // 第2引数：初期値（state）
 
    const [counter, dispatch] = useReducer(ButtonReducer, 0)
    return (
        <div>
            カウンター：{counter}
            <input type="button" value="加算" onClick={() => dispatch('ADD_BUTTUN')} />
            <input type="button" value="減算" onClick={() => dispatch('minus_BUTTUN')} />
            <input type="button" value="リセット" onClick={() => dispatch('delete_BUTTUN')} />
            
        </div>
    )
}

export default Counter02