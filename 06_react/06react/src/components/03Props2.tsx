import '../css/03Props2.css'
// コンポーネントを階層化すると？
// 親コンポーネント
// 親は「中継役」
// props として { text: "かきくけこ" } を受け取る
// const { text } = props で取り出す
// <PropsChild text={text} /> で 子に渡す

const Props2 = (props: {text: string}) => {
    const {text} = props
    return <div className='parentComponent'><PropsChild text={text}/></div>
}

// 子コンポーネント
const PropsChild = (props: {text: string}) =>{
    const {text} = props
    return <div className='childComponent'>{text}</div>
}


export default Props2