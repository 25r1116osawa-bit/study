import React, { ReactElement, useContext } from "react"

const AuthorityContext = React.createContext('')

const PracticeFrame1 = () => {
    const url = new URL(window.location.href)
    const params = url.searchParams
    const authority = params.get('Authority') as string
    return (
        <AuthorityContext.Provider value={authority}>
            <div>
                {/* 回答例1 */}
                <AuthorityElement1 />
                {/* 回答例2 */}
                <AuthorityElement2 />
                {/* 回答例3 */}
                <AuthorityElement3 />
                {/* 回答例4 */}
                <AuthorityElement4 />
            </div>
        </AuthorityContext.Provider>
    )
}

const AuthorityElement1 = () => {
    // 管理者なのか閲覧者なのかを表示する。
    // 管理者の場合は、新規作成ボタンを押せるようにして下さい。(ボタンの活性化)
    // 閲覧者の場合は、新規作成ボタンを押せないようにして下さい。(ボタンの非活性化)

    const authorityContext = useContext(AuthorityContext)
    
    // 権限の名称の表示用データの準備
    let authority:string
    // 出力文の準備
    let htmltext:ReactElement = <div></div>
    if(authorityContext === '閲覧者'){
        authority = '閲覧者'
        htmltext = <div>{authority}<input type="button" value="新規作成" disabled /></div>
    }else if (authorityContext === '管理者') {
        authority = '管理者'
        htmltext = <div>{authority}<input type="button" value="新規作成" /></div>
    }else{
        authority = '権限不明'
        htmltext = <div>{authority}<input type="button" value="新規作成" disabled /></div>
    }

    // 出力
    return (
        htmltext 
    )
}

const AuthorityElement2 = () => {
    // 管理者なのか閲覧者なのかを表示する。
    // 管理者の場合は、新規作成ボタンを押せるようにして下さい。(ボタンの活性化)
    // 閲覧者の場合は、新規作成ボタンを押せないようにして下さい。(ボタンの非活性化)
    // 完全return分岐

    const authorityContext = useContext(AuthorityContext)

    // 権限の名称の表示用データの準備
    let authority:string
    if(authorityContext === '閲覧者'){
        authority = '閲覧者'
        return <div>{authority}<input type="button" value="新規作成" disabled /></div>
    }else if (authorityContext === '管理者') {
        authority = '管理者'
        return <div>{authority}<input type="button" value="新規作成" /></div>
    }else{
        authority = '権限不明'
        return <div>{authority}<input type="button" value="新規作成" disabled /></div>
    }
}

const AuthorityElement3 = () => {
    // 管理者なのか閲覧者なのかを表示する。
    // 管理者の場合は、新規作成ボタンを押せるようにして下さい。(ボタンの活性化)
    // 閲覧者の場合は、新規作成ボタンを押せないようにして下さい。(ボタンの非活性化)
    // &&
    const authorityContext = useContext(AuthorityContext)
    // 権限の名称の準備
    let authority:string
    if(authorityContext === '閲覧者'){
        authority = '閲覧者'
    }else if (authorityContext === '管理者') {
        authority = '管理者'
    }else{
        authority = '権限不明'
    }

    return (
        <div>
            {authority}
            {authorityContext === '閲覧者' && (
                <input type="button" value="新規作成" disabled/>
            )
                }{
            authorityContext === '管理者' && (
                <input type="button" value="新規作成" />
            )}
            {authorityContext !== '管理者' && authorityContext !== '閲覧者' && (
                <input type="button" value="新規作成" disabled/>
            )}
        </div>
    )
}

const AuthorityElement4 = () => {
    // 管理者なのか閲覧者なのかを表示する。
    // 管理者の場合は、新規作成ボタンを押せるようにして下さい。(ボタンの活性化)
    // 閲覧者の場合は、新規作成ボタンを押せないようにして下さい。(ボタンの非活性化)
    // isAdmin
    const authorityContext = useContext(AuthorityContext)
    // 権限の名称の準備
    let authority:string
    if(authorityContext === '閲覧者'){
        authority = '閲覧者'
    }else if (authorityContext === '管理者') {
        authority = '管理者'
    }else{
        authority = '権限不明'
    }

    const isAdmin = authorityContext === '管理者'
    return (
        <div>
            {authority}
            <input type="button" value="新規作成" disabled={!isAdmin} />
        </div>
    )
}
export default PracticeFrame1