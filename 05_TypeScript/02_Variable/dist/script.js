"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 変数の宣言
let name1;
// 変数へ代入
name1 = '木内和也';
// 変数の宣言と代入を同時に（型推論を行うので型指定は、省略できます。）
let name2 = '木内';
// 型について
// 基本型
// 数値型
let num1 = 100;
console.log(num1);
let num2 = 200;
console.log(num1 + num2);
// 文字列型に数値型を代入しようとすると、エラー
let mix1 = (num1 + num2).toString();
console.log(mix1);
// 参照型
// 配列
let arr1 = [];
arr1.push('あいうえお');
// arr1.push(100)
let arr2 = [];
// arr2.push('あいうえお')
arr2.push(100);
// 飛ばした場合はそれまでの要素はすべてundefined
arr2[10] = 3;
// 存在しない要素を取得してもエラーにならない(undefinedを取得できる)
console.log(arr2);
console.log(arr2[8]);
console.log(arr2[12]);
const powerLevel = ['弱', '中', '強'];
// powerLevel[1] = '書き込めなくなった。'
// オブジェクト
// any
//# sourceMappingURL=script.js.map