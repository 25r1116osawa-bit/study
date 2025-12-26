// 出力準備
let output = document.getElementById('output')

// 配列(応用)
// 二次元配列(多次元配列)
let arr01 = [[]]
let arr02 = [['0-0','0-1','0-2'],['1-0','1-1','1-2']]

output.innerHTML += arr02 + '<br>'
output.innerHTML += arr02[0] + '<br>'
output.innerHTML += arr02[1] + '<br>'
output.innerHTML += arr02[1][1] + '<br>'

// オブジェクト
let classRoom = {
    classNumber:201,
    teachers:['木内','林'],
    students:['中溝','中村','林','平井','平田','藤田','松田','山本']
}

output.innerHTML += classRoom.classNumber + '<br>'
output.innerHTML += classRoom.teachers + '<br>'
output.innerHTML += classRoom.students + '<br>'
