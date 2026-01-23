// テキストを表示するだけのコンポーネント
const Text = (props: {
    /** 表示するテキストを入れます。 */
    text: string
}) => {
    const {text} = props
    return <div>{text}</div>
}
export default Text