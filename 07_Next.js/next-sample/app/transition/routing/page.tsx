'use client'
import Link from "next/link"
import { useState } from "react"

export default () => {
    const [msg,setMsg] = useState("")

    const changeMsg = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setMsg(e.target.value)
    }

    return (<>
        <h2>TOPページ</h2>
        <label htmlFor="msg">入力データ</label>
        <input type="text" name="msg" id="msg" value={msg} onChange={changeMsg}/>
        <ul>
            <li><Link href="transition/get?msg=abcdefg">GET1</Link></li>
            <li><Link href={'transition/get?msg=' + msg}>GET2</Link></li>
            <li><Link href={'transition/routing/aabbccdd'}>ダイナミックルーティング1</Link></li>
            <li><Link href={'transition/routing/' + msg}>ダイナミックルーティング2</Link></li>
        </ul>
    </>)
}