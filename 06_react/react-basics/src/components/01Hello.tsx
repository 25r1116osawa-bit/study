// クロージャー（関数の中に入る関数）
// Reactでは頻繁に登場する。
// returnがコンポーネントとして返る
// onClick={onClick}の{}の内側は上の関数を呼び出している。
// reactの書き方は2種類あり、下記の書き方は関数コンポーネントと呼ぶ。
// もう一つは、クラスコンポーネント

const Hello = () => {
    const onClick = () =>{
        alert("Hello World")
    }
    const text = 'はろー'
    
    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}
export default Hello


