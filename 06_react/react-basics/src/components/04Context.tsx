// Context の基本サンプル
// Provider で渡した値を、深い階層のコンポーネントで受け取る

import React from 'react'
import '../css/04Context.css'

/*
  LoginUserContext
  ・ログインユーザー情報を保持する Context
  ・createContext の引数は「Provider が無い場合の初期値」
*/
const LoginUserContext = React.createContext('')

/*
  Context1（Provider 側）
*/
const Context1 = () => {
  const user = 'abc123'

  return (
    <LoginUserContext.Provider value={user}>
      <div className="context1">
        コンテキスト1層目
        <Context2 />
      </div>
    </LoginUserContext.Provider>
  )
}

/*
  Context2（Consumer 側）
*/
const Context2 = () => (
  <LoginUserContext.Consumer>
    {(userContext) => (
      <div className="context2">
        {userContext}
        <br />
        コンテキスト2層目
        <Context3 />
      </div>
    )}
  </LoginUserContext.Consumer>
)

/*
  Context3（Consumer 側）
*/
const Context3 = () => (
  <LoginUserContext.Consumer>
    {(userContext) => (
      <div className="context3">
        {userContext}
        <br />
        コンテキスト3層目
      </div>
    )}
  </LoginUserContext.Consumer>
)

export default Context1
