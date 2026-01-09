import { useReducer, useState } from "react"
import '../css/08Hook3useReducer.css'

// Todo型の宣言
interface Todo {
    id: number,
    text: string
    completed: boolean
}

// 状態管理配列
type TodoState = Todo[]

// リデューサーはセットなんたらを関数のように使える
// TodoAction のaddtodoは追加する  payloadはonかオフ
// TOGGLE_TODO 完了か非完了か　
// DELETE_TODO 削除するかどうか



// リデューサーロジック アクションを持つことができる。
type TodoAction = { type: 'ADD_TODO', payload: string } | { type: 'TOGGLE_TODO', payload: number } | { type: 'DELETE_TODO', payload: number }


// 状態遷移のロジック ：今何をしているのか状態を表す設定
const todoReducer = (state: TodoState, action: TodoAction) => {
    switch (action.type) {
        // メモを追加する
        // ... state は配列の一番後ろに要素を追加したい場合にこのような書き方がある。
        case 'ADD_TODO':
            return [
                ...state, {
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
        case 'DELETE_TODO':
            return state.filter((todo) => {
                return todo.id !== action.payload
            })
        default:
            return state
    }
}



const Hook3 = () => {

    // リデューサーフック usestateと書き方は変数のみで値と関数がセットになっているイメージ。
    const [todos, dispatch] = useReducer(todoReducer, [])

    // フォーム用ステータス
    const [inputValue, setInputValue] = useState('')

    const doActuion = () => {
        dispatch({ type: 'ADD_TODO', payload: inputValue })
        setInputValue('')
    }

    return (
        <div className='container'>
            <h2 className='title'>Todo List</h2>

            <div className='inputGroup'>
                <input
                    className='input'
                    value={inputValue} // stateを値に固定
                    onChange={(e) => setInputValue(e.target.value)} // 入力時にstateを更新
                    placeholder="新しいタスクを入力"
                />
                <button className='addButton' onClick={doActuion}>追加</button>
            </div>

            <ul className='list'>
                {todos.map((todo) => (
                    <li key={todo.id} className='listItem'>
                        {/* 動的なクラス名の切り替え */}
                        <span
                            onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                            className={`'todoText' ${todo.completed ? 'completed' : ''}`}
                        >
                            {todo.text}
                        </span>

                        <button
                            className='deleteButton'
                            onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                        >
                            削除
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
// (event) => {event.target.value} イベント自身の入力されたvalueを取得する。
export default Hook3
