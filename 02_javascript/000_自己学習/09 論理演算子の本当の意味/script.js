// true false

const val = "abc";
if(val){
    console.log("ValはTrueです")
}else{
    console.log("valはfalseです")
}


const num = 0;
if(num){
    console.log("numはTrueです")
}else{
    console.log("numはfalseです")
}


const num10 = 10;
if(num10){
    console.log("num10はTrueです")
}else{
    console.log("num10はfalseです")
}

const undef = undefined;
if(undef){
    console.log("undefはTrueです")
}else{
    console.log("undefはfalseです")
}

const null1 = null;
if(null1){
    console.log("null1はTrueです")
}else{
    console.log("null1はfalseです")
}




const flag1 = true;
const flag2 = true;

// または
if(flag1 || flag2 ){
    console.log("1か2はtrueになります");
}
// なおかつ
if(flag1 && flag2 ){
    console.log("1か2はtrueになります");
}

// 混乱しやすいポイント
// ||は左側がTrueの時その時点で返却する
// *******************
const numTest = null;
const fee = numTest || "金額見設定です";
console.log(fee);

const numTest1 = 100;
const fee1 = numTest1 || "金額見設定です";
console.log(fee1);
// *******************


// &&は左側がflaseのときにその時点で返却する
// *******************
const and= null;
const result = and && 10;
console.log(result);


// *******************