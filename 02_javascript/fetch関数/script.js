// サーバの起動
// json-server --watch db.json

const button = document.getElementById("button")

function addTodo() {
  fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "テスト",  // サーバに送るデータはここ
      completed: true     // 
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("追加されたデータ", data);
  });
}

button.addEventListener("click",(e)=>{
   e.preventDefault()
  addTodo()})