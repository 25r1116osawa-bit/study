// 出力準備
let output = document.getElementById('output')

// 配列(実用)

// 配列の生成
let members = ['木内A','木内B','木内C','木内D','木内E','木内F','木内G','木内H']

output.innerHTML += members + '<br>'

// 一人ずつ出力
// indexの値が1ずつ増える
for (let index = 0; index < members.length; index++) {
    const element = members[index];
    output.innerHTML += element + '<br>'
}

output.innerHTML += '<br>'

// 一人ずつ出力
// 要素を一つずつ取り出す。
members.forEach(function (element){
    output.innerHTML += element + '<br>'
});

// 従業員生成
let emp01 ={
    name:'従業員A',
    age:33,
    gender:0
}
let emp02 ={
    name:'従業員B',
    age:42,
    gender:1
}
let emp03 ={
    name:'従業員C',
    age:25,
    gender:0
}
let emp04 ={
    name:'従業員D',
    age:33,
    gender:3
}
let emp05 ={
    name:'従業員E',
    age:31,
    gender:1
}

let employees = [emp01,emp02,emp03,emp04,emp05]

employees.forEach(employee => {
    let outHtml = `
<dl>
    <dt>名前</dt>
    <dd>${employee.name}</dd>
    <dt>年齢</dt>
    <dd>${employee.age}</dd>
    <dt>性別</dt>
    <dd>${
        employee.gender == 0 ? '男' :
        employee.gender == 1 ? '女': '!?'
    }</dd>
</dl>
    `
    output.innerHTML += outHtml
});