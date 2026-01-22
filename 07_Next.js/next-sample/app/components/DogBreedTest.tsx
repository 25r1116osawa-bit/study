"use client"
import { useState } from "react"


// 子
// select を表示する



// const Child = ({ onChange }: { onChange: (v: string) => void }) => {
//   return (
//     <select onChange={(e) => onChange(e.target.value)}>
//       <option value="A">A</option>
//       <option value="B">B</option>
//     </select>
//   )
// }


// // 親

// export default function Page() {
//   const [value, setValue] = useState("")

//   return (
//     <>
//       <Child onChange={setValue} />
//       <p>選択中：{value}</p>
//     </>
//   )
// }

// 変更があったら 親から渡された関数を呼ぶ
// 「状態は上、操作は下
// 親：状態を持つ
// 子：操作して通知する


// Step1
// 何をしたいかを決める。

// selectBoxを作成し、そのselectboxに犬のリスト一覧を取得し反映させる。
// selectboxは表示のため、子
// selectboxの状態と通知は親

