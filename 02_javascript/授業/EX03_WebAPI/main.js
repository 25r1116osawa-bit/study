// 出力準備
let output = document.getElementById('output')

// WebAPI
function capture(){
    output.alt = "画像取得中"

    // データの取得(非同期通信)
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            output.src = json.message
            output.alt = '画像取得完了'
        })
}


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data));