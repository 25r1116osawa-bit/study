import { useState } from "react"



const Counter = () => {
  const[state,setState] = useState(0);
  const[realstate,setRealState] = useState(0);
  const[test,setTest] = useState("test");

  const onClickCountUP =()=>{
  // 更新関数は特定の関数の中で使用することで、
  // 一つ目のSetStateでstate はまだ0だな1にしよう。
  // 二つ目のSetStateでstate はまだ0だな1にしよう。
  // 関数が実行されて＋１されるという見方をする。（バッチ処理（予約処理）ともいう）
    setState(state+1)
    setState(state+1)
  }

  const onClickRealCountUP =() =>{
  
  // onClickCountUP()は現在の値を参照し、差分を予約処理する。
  // onClickRealCountUPは現在のusestateのステートを参照し
  // アロー関数の引数として渡すことで、現在の値を直接操作する。

  setRealState((prev) => prev+1)
  setRealState((prev) => prev+1)
  }

  //setTest("aaaa")

  return (
    <div>
      <p>{state}</p>
      <button onClick={onClickCountUP}>カウントアップ</button>
      
      <p>{realstate}</p>
      <button onClick={onClickRealCountUP}>カウントアップ</button>
      <p>{test}</p>
    </div>
  )
}

export default Counter
