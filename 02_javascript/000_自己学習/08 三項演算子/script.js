
// ある条件 ? 条件がtrueの時 : 条件がfalseの時

const val1 = (1 > 0 ? "treuです" : "falseです")
console.log(val1)

num = "1300";
console.log(num.toLocaleString()) // 数値に句点をつける。


const formatNum = typeof num === 'number' ? num.toLocaleString() : "数字ではありません。"
console.log(formatNum)


const checksum = (num1,num2) =>{
    return (num1 + num2) > 100 ? "100を超えている" : num1 + num2
}

console.log(checksum(90,10))
