// テキストを表示するだけのコンポーネント
const Text = (props: {text: string}) => {
    const {text} = props
    return <div>{text}</div>
}
export default Text