

const PracticeFrame1 = () => {
    // windows.location オブジェクトの href プロパティを参照すると
    // 現在表示している Web ページ の URL を参照することができます。
    const url = new URL(window.location.href)
    const params = url.searchParams
    // URLのクエリパラメータ Authority の値を取り出して、authority という変数に入れた
    const authority = params.get('Authority')
    
    
    return (
        <div>
            <AuthorityElement1 text = {authority} />
        </div>
    )
}
//  <AuthorityElement1 text = {authority}
// = AuthorityElement1({ text: authority })
// これは、関数AuthorityElement1に属性{ text: authority }を入れるイメージ


// この props の中に text があって、型は string | null だよ」と TypeScript に教えている
const AuthorityElement1 = ({ text }: { text: string | null }) => {
    const person = {text}

    console.log(person)

    const test = () =>{
        if(person.text === "管理者"){
          return  <button> 新規作成 </button>
        }
        if(person.text === "閲覧者"){
          return  <button disabled>押せないボタン</button>
        }else{
          return  
        }
        
    }


    return (
        <div>
           {test()}
        </div>
    )
}
export default PracticeFrame1

