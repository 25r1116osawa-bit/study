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

/*
関数(なにかをしてくれる箱)	function capture() { ... }
変数	output, response, json
オブジェクト	output, response, json, console
メソッド(特定の人（もの）が持っている道具)	fetch(), .then(), response.json(), console.log()
*/
