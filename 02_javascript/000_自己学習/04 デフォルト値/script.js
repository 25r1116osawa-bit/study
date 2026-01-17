// 通常の引数
const sayHello = (name) => {
    console.log(`こんにちわ${name}さん`)
}

sayHello("大澤")
sayHello()

// デフォルト引数
const sayHello1 = (name="大澤") => {
    console.log(`こんにちわ${name}さん`)
}

sayHello1("樹")
sayHello1()



// オブジェクトの分割代入
// name プロパティはない
const myProfile ={
    age:31
}
const {age,name} = myProfile;

console.log(age);
console.log(name);


// オブジェクトの分割代入
// name1プロパティはないが分割時に、name1にtatsukiを代入
const myProfile1 ={
    age1:31
}
const {age1,name1="tatsuki"} = myProfile1;

console.log(age1);
console.log(name1);