import { useState } from "react"

const useLocalStorage = (keyName:string,initVal:string) =>{
    const key = "hook:" + keyName
    
    const value = () => {
        try {
            // ローカルストレージから値の取得
            const item = localStorage.getItem(key)
            // 文字列データなので、データのオブジェクト化
            return item ? JSON.parse(item) : initVal
        }catch(error){
            return initVal
        }
    }
    
    const [savedValue,setSavedValue] = useState(value)
    
    // ローカルストレージに値を登録する
    const setValue = (val:string) =>{
        try{
            setSavedValue(val)
            localStorage.setItem(key,JSON.stringify(val))
        }catch(error){
            console.log(error)
        }
    }

    return [savedValue,setValue]
}


const Hook5 = () => {
    const [text, setText] = useLocalStorage('LSData','')

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    )
}


export default Hook5