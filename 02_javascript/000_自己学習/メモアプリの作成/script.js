const onClickAdd = () =>{
    // add text の値を取得
    const inputText = document.getElementById("add-text").value
    document.getElementById("add-text").value="";
    createIncomplete(inputText);
}


// 渡された引数を元に未完了のtodoを作成する関数
const createIncomplete =(todo) =>{
//domの生成　li タグの生成
    const li = document.createElement("li");

    //domの生成　div タグの生成
    const div = document.createElement("div");
    div.className ="list-row"
   
    //domの生成 pタグの生成
    // innerText =タグのテキストって意味
    const p = document.createElement("p")
    p.className ="todo-item"
    p.innerText = todo

    // 完了 buttonタグ生成
    const completeButton = document.createElement("button")
    completeButton.innerText ="完了"
    completeButton.addEventListener("click",()=>{
        const completeTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        const backButton = document.createElement("button")
        backButton.innerText= "戻す"

        // Todoの内容を取得し、未完了リストに追加
        backButton.addEventListener("click",() =>{
             const todoText = backButton.previousElementSibling.innerText;
             createIncomplete(todoText);
            backButton.closest("li").remove();

        })
       
        completeTarget.firstElementChild.appendChild(backButton);
        document.getElementById("complete-list").appendChild(completeTarget)
    })


    // 削除 buttonタグ生成
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "削除"
    deleteButton.addEventListener("click",()=>{
        // 押された削除ボタンの親にある最初のliタグをターゲットにする
        const deletTarget = deleteButton.closest("li");
        // incompleate-list
        document.getElementById("incompleate-list").removeChild(deletTarget)
        console.log(deletTarget)
    })


    
    // liタグの下はdivタグですと指定する
    li.appendChild(div);
    // dibタグの下にpタグですと指定
    div.appendChild(p);
     // dibタグの下にbuttonタグですと指定
    div.appendChild(completeButton)
     // dibタグの下にbuttonタグですと指定
    div.appendChild(deleteButton)
    // 指定した要素の子どもにここまでで作成したliを差し込む
    // appendChiled(li)は、liの一番下に追加する。
    document.getElementById("incompleate-list").appendChild(li);
    
}



// idが add-button のHTML要素を取得して、
// その要素がクリックされたら onClickAdd を実行するよう登録する」
document.getElementById("add-button").addEventListener("click",onClickAdd)
