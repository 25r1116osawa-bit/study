

const namearr = ["田中","山田","大澤"]

// 従来のやり方
// for と打つと雛形が出てくる

function abc() { for (let index = 0; index < namearr.length; index++)
    {
    const element = namearr[index];
    console.log(element)
}
}


// map
namearr.map((name) => {
    console.log(name);
    // 田中 
    // 山田 
    // 大澤
});

// mapで配列を作る 使い方1
// 配列から要素を一つづつ取り出し、戻り値をnameArr2に順番に格納する。
const nameArr2 = namearr.map((name) => {
    return name;
});
console.log(nameArr2); //['田中', '山田', '大澤']


// mapで配列を作る 使い方2
// 第二引数でindexを指定する。
// map関数は必ず実行されるので、関数の呼び出しはない。
const nameArr3 = namearr.map((name,index) => {
    console.log(`${index+1}番目は${name}です`)
});




// filter 関数
const numArr = [1,2,3,4,5];
const newNumArr = numArr.filter((num)=>{
    return num % 2 ===1;
});
console.log(newNumArr);

