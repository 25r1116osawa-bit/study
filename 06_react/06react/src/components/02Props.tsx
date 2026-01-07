// const Props = () => {} コンポーネントの完成

/* これで、返す予定のHTML　ただし、このままではtextがエラー
const Props = () => {
    return <div>{text}</div>
    }
*/


// propsの型がテキストでstring
// propsは関数の引数のようなもので、すべての引数を入れる構造のため、
// オブジェクトで定義されている。


// props という引数は、「text という string 型のプロパティを持つオブジェクト」

const Props = (props: {text: string}) => {
    // 「props オブジェクトの中から text プロパティを取り出して、text という定数に代入している」
    const {text} = props
    return <div>{text}</div>
}
export default Props