// 出力準備
let output = document.getElementById('output')

// 配列
// 配列の生成方法
// 要素を[]の中に記入、『,』で区切る
let arr01 = []
let arr02 = ['木内','大石','大澤']

// 配列の要素の取得方法
// インデックスを指定する。
output.innerHTML += arr02[0] + '<br>'
output.innerHTML += arr02[1] + '<br>'
output.innerHTML += arr02[2] + '<br>'
// インデックスを指定せずに出力
output.innerHTML += arr02 + '<br>'

// 配列の要素の上書き
arr02[0] = '木内和也'
output.innerHTML += arr02[0] + '<br>'

// 配列への要素の追加
arr02[3] = '大城'
output.innerHTML += arr02 + '<br>'


arr02.push('倉田')
output.innerHTML += arr02 + '<br>'




// 連想配列(オブジェクト)の生成方法
let map01 = {}
let map02 = {
    '講師':'木内🐕',
    '生徒1':'澤田',
    '生徒2':'下條'
}

// 連想配列の取得方法
output.innerHTML += map02['講師'] + '<br>'
output.innerHTML += map02['生徒1'] + '<br>'
output.innerHTML += map02['生徒2'] + '<br>'


// 連想配列の上書き
map02['講師'] = '木内和也'
output.innerHTML += map02['講師'] + '<br>'

// 連想配列の追加
map02['生徒3'] = '厨子'
output.innerHTML += Object.keys(map02) + '<br>'
output.innerHTML += Object.values(map02) + '<br>'

// オブジェクトの取得方法
output.innerHTML += map02.講師 + '<br>'
output.innerHTML += map02.生徒1 + '<br>'
output.innerHTML += map02.生徒2 + '<br>'

// オブジェクトの上書き
map02.講師 = '木内和也'
output.innerHTML += map02.講師 + '<br>'

// オブジェクトの追加
map02.生徒4 = '高井'
output.innerHTML += Object.keys(map02) + '<br>'
output.innerHTML += Object.values(map02) + '<br>'