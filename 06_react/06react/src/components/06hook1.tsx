// Hookを使わずに値の変更を行ったとき
const Hook1 = () => {

    let value = ''

    const onClick = () =>{
        // データが変わっても画面が更新されないため、見た目に変化はない
        value = 'あいうえお'
        alert('aaaa')
    }

    return (
        <div>
            <input type="button" value="ぼたん" onClick={onClick} />
            <input type="text" value={value}/>
        </div>
    )
}
export default Hook1
