import { useReducer, useState } from "react"
import '../css/08Hook3useReducer.css'

// ------------------------------
// Todo型の定義
// ------------------------------
// id: 一意の番号
// text: タスク内容
// completed: 完了済みかどうか
interface Todo {
    id: number
    text: string
    completed: boolean
}

// ------------------------------
// 状態管理配列の型
// ------------------------------
type TodoState = Todo[]

// ------------------------------
// アクション型の定義
// ------------------------------
// ADD_TODO: タスクを追加
// TOGGLE_TODO: タスクの完了状態を切り替え
// DELETE_TODO: タスクを削除
type TodoAction =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number }

// ------------------------------
// リデューサー関数
// ------------------------------
// state: 現在のTodoリスト
// action: 実行するアクション
const todoReducer = (state: TodoState, action: TodoAction) => {
    switch (action.type) {
        // --------------------------
        // ADD_TODO: 新しいタスクを追加
        // --------------------------
        case 'ADD_TODO':
            return [
                ...state, // 現在のTodoリストを展開
                {
                    id: Date.now(), // 一意のIDを生成
                    text: action.payload, // 入力されたタスクのテキスト
                    completed: false // 新しいタスクは未完了
                }
            ]

        // --------------------------
        // TOGGLE_TODO: 完了状態の切り替え
        // --------------------------
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    // 対象タスクのcompletedを反転
                    return { ...todo, completed: !todo.completed }
                }
                return todo // それ以外は変更なし
            })

        // --------------------------
        // DELETE_TODO: タスクの削除
        // --------------------------
        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.payload)

        // --------------------------
        // デフォルト（何もしない）
        // --------------------------
        default:
            return state
    }
}

// ------------------------------
// メインコンポーネント
// ------------------------------
const Hook3 = () => {

    // --------------------------
    // useReducerによる状態管理
    // todos: 現在のタスク一覧
    // dispatch: アクションを送信する関数
    // 初期値は空配列
    // --------------------------
    const [todos, dispatch] = useReducer(todoReducer, [])

    // --------------------------
    // 入力フォーム用の状態
    // --------------------------
    const [inputValue, setInputValue] = useState('')

    // --------------------------
    // 追加ボタン押下時の処理
    // dispatchでADD_TODOアクションを送る
    // 入力値を空にする
    // --------------------------
    const doActuion = () => {
        dispatch({ type: 'ADD_TODO', payload: inputValue })
        setInputValue('')
    }

    return (
        <div className='container'>
            <h2 className='title'>Todo List</h2>

            {/* --------------------------
                入力フォーム
            -------------------------- */}
            <div className='inputGroup'>
                <input
                    className='input'
                    value={inputValue} // stateを値に固定
                    onChange={(e) => setInputValue(e.target.value)} // 入力時にstateを更新
                    placeholder="新しいタスクを入力"
                />
                <button className='addButton' onClick={doActuion}>追加</button>
            </div>

            {/* --------------------------
                Todoリストの表示
            -------------------------- */}
            <ul className='list'>
                {todos.map((todo) => (
                    <li key={todo.id} className='listItem'>

                        {/* --------------------------
                            タスクテキスト
                            クリックで完了/未完了を切り替え
                            completedならスタイルを変える
                        -------------------------- */}
                        <span
                            onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                            className={`'todoText' ${todo.completed ? 'completed' : ''}`}
                        >
                            {todo.text}
                        </span>

                        {/* --------------------------
                            削除ボタン
                            クリックで対象タスクを削除
                        -------------------------- */}
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

// ------------------------------
// export
// ------------------------------
export default Hook3
