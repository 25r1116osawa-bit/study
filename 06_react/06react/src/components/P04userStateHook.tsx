/*リデューサーで以下のアクションを追加
カウンターに以下３つ
加算
減算
リセット
*/

import { useReducer } from "react"


// 状態管理用の変数
type ButtonState:number

// リデューサーロジック アクションを持つことができる。
type TodoAction = {buttunName:'ADD_BUTTUN',number:number} | {buttunName:'minus_BUTTUN',number:number} | {buttunName:'delete_BUTTUN',number:number} 

// state: TodoState, action: TodoAction


const ButtonReducer = (state:ButtonState , action:TodoAction) => {
    switch (action.buttunName) {
        case 'ADD_BUTTUN':
            return  (state + 1)

        case 'minus_BUTTUN':
            return  (state - 1)
            
        case 'delete_BUTTUN':
            return  (state = 0)

        default:
            break 
    }
}


/* const Hook3 = () => {

    // リデューサーフック usestateと書き方は変数のみで値と関数がセットになっているイメージ。
    const [todos, dispatch] = useReducer(todoReducer, [])

    // フォーム用ステータス
    const [inputValue, setInputValue] = useState('')

    const doActuion = () => {
        dispatch({ type: 'ADD_TODO', payload: inputValue })
        setInputValue('')
    }
*/


const Counter02 = ( ) => {

    const [todos, dispatch] = useReducer(ButtonReducer, [])

    
    return (
        <div>
            カウンター：0
            <input type="button" value="加算" />
            <input type="button" value="減算" />
            <input type="button" value="リセット" />
        </div>
    )
}

export default Counter02