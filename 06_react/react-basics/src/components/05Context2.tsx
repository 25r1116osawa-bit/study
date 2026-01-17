import React, { useContext } from 'react'
import '../css/04Context.css'

// Context は null 許容で定義
const LoginUserContext = React.createContext<string | null>(null)

const Context11 = () => {
  const user = 'abc123'

  return (
    <LoginUserContext.Provider value={user}>
      <div className="context1">
        <p>{user}</p>
        <p>コンテキスト1層目</p>
        <Context12 />
      </div>
    </LoginUserContext.Provider>
  )
}

const Context12 = () => {
  const userContext = useContext(LoginUserContext)
  if (userContext === null) return null

  return (
    <div className="context2">
      <p>{userContext}</p>
      <p>コンテキスト2層目</p>
      <Context13 />
    </div>
  )
}

const Context13 = () => {
  const userContext = useContext(LoginUserContext)
  if (userContext === null) return null

  return (
    <div className="context3">
      <p>{userContext}</p>
      <p>コンテキスト3層目</p>
    </div>
  )
}

export default Context11
