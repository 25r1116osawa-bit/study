import React, { useContext } from 'react'
import '../css/04Context.css'
// コンテキスト
// 様々なコンポーネントで扱うことのある変数を入れる変数
// useContext(フック)を利用したバージョン

const LoginUserContext = React.createContext('')

const Context11 = () => {
    const user = 'abc123'
    return (
        <LoginUserContext.Provider value={user}>
            <div className="context1">
                {user}
                コンテキスト1層目<Context12 />
            </div>
        </LoginUserContext.Provider>
    )
}

const Context12 = () => {
    const userContext = useContext(LoginUserContext)
    return (
        <div className="context2">
            {userContext}
            コンテキスト2層目<Context13 />
        </div>
    )
}

const Context13 = () => {
    const userContext = useContext(LoginUserContext)
    return (
        <div className="context3">
            {userContext}
            コンテキスト3層目
        </div>
    )
}

export default Context11