// スプレッド構文 ...
// 配列、オブジェクトで使う
// 配列の中身を順番に出す

const arr1 =[1,2];
console.log(arr1); // [1,2]
console.log(...arr1); // 1 2


// 従来の書き方
const sumFunc = (num1, num2) => console.log(num1 + num2)

// 以下は、同じ結果が生成
sumFunc(arr1[0],arr1[1])
sumFunc(...arr1)


// まとめる
const arr2 = [1,2,3,4,5]
const [num1,num2,...arr3] = arr2;
console.log(num1);    // 1
console.log(num2);    // 2
console.log(...arr3); // 3 4 5



// 一番多い使い方
// 配列のコピー、結合

const arr4 =[10,20];
const arr5 =[30,40];

//　配列のコピー
const arr6 = [...arr4]
console.log(arr6)

// 配列の結合
const arr7 = [...arr4,...arr5]
console.log(arr7)