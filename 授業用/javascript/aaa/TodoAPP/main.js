
const onClickAdd = () =>{
    const inputText = document.getElementById("add-text").value
    document.getElementById("add-text").value="";

    //domの生成　li タグの生成
    const li = document.createElement("li");

    //domの生成　div タグの生成
    const div = document.createElement("div");
    div.className ="list-row"
   
    //domの生成 pタグの生成
    // innerText =タグのテキストって意味
    const p = document.createElement("p")
    p.className ="todo-item"
    p.innerText = inputText

    // 完了 buttonタグ生成
    const completeButton = document.createElement("button")
    completeButton.innerText ="完了"



    // 削除 buttonタグ生成
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "削除"

    // dibタグの下にpタグですと指定
    // liタグの下はdivタグですと指定する
    li.appendChild(div);
    div.appendChild(p);
    p.appendChild(completeButton)
    p.appendChild(deleteButton)
    
    // 指定した要素の子どもにここまでで作成したliを差し込む
    // appendChiled(li)は、liの一番下に追加する。
    document.getElementById("incompleate-list").appendChild(li);
    
}

// idが add-button のHTML要素を取得して、
// その要素がクリックされたら onClickAdd を実行するよう登録する」
document.getElementById("add-button").addEventListener("click",onClickAdd)
