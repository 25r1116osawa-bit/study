// 出力準備
let output = document.getElementById('output')

// GETパラメータの取得する処理
let url = new URL(window.location.href)
let params = url.searchParams
let msg = params.get('msg')

console.log(msg)
output.innerHTML = msg
