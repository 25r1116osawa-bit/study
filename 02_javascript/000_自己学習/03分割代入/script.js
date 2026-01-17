//配列 従来式
const split = ["山田","田中"];
console.log(split[0]);

//配列 分割代入
const split1 = ["osawa","tatsuki"];
const [name,age] = split1;
console.log(name);



const myProfile = {
    name1:"大澤",
    age1:37
};

//オブジェクト 従来式
const message1 = `名前は${myProfile.name1},年齢は${myProfile.age1}`
console.log(message1);


// オブジェクト 分割代入
// オブジェクトの分割代入はキーをいれる。
const { name1, age1 }  = myProfile;
const message2 = `名前は${name1},年齢は${age1}`
console.log(message2);