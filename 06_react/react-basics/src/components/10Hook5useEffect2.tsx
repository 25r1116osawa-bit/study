import { log } from "console"
import { useEffect, useState } from "react"

export interface Personal{
    name:string
    age:number
    mail:string
}

const Record = (props: {personal: Personal}) => {

    // console.log('レンダリング');
    


    // プロップの取得
    const personal = props.personal
    

    // ステートフックの準備
    const [age,setAge] = useState(personal.age)
    const [msg,setMsg] = useState('')

    // 年齢加算ボタンのAction
    const doAddAge = () => {
       //  console.log('ボタンクリック');
        setAge(age+1)
    }

    useEffect(()=> {
       //  console.log('エフェクト1');
        if(age >= 65){
            setMsg('定年です。')
        }
    },[age])

    useEffect(() => {
      //   console.log('エフェクト2');
    },[msg])

   return (
  <div className="record">
    <span>{personal.name}</span>
    <span>{age}</span>
    <span>{personal.mail}</span>
    <button onClick={doAddAge}>年齢加算</button>
    <span>{msg}</span>
  </div>
)
}

export default Record
