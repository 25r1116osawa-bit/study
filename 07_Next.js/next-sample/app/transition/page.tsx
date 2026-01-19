import Link from "next/link"
import { SetStateAction, useState } from "react"

export default () => {
    const [msg,setMsg] = useState("")

    const changeMsg = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setMsg(e.target.value)
    }

    return (<>
        <h2>TOPページ</h2>
        <ul>
            <input type="text" name="msg" id="msg" value={msg} onChange={changeMsg}/>
            <li><Link href="transition/get?msg=abcdefg">GET1</Link></li>
            <li><Link href={'transition/get?msg=' + {msg}}>GET2</Link></li>
        </ul>
    </>)
}