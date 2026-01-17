let val2 = "let変数";
console.log(val2);

//上書き可能
//再宣言不可
val2 = "おはようございます。";
console.log(val2);

//上書き不可
//再宣言不可
const val3 = "const変数";
console.log(val3);


//オブジェクト、[]のプロパティは変更可能
const val4 = {
    name:"tatsuki",
    age:37
};
console.log(val4);


val4.name = "osawa";
val4.age = 37;
// オブジェクトにプロパティを追加
val4.address = "oosaka"
console.log(val4)


// 配列を作成
const val5 =["dog","cat"]
console.log(val5)

// 配列の中身を変更
val5[0] = "bard";
console.log(val5);

// 配列に値を追加
val5.push("monkey")
console.log(val5);
