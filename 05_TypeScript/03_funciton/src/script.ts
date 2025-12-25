// 関数

function func1(name: string, age: number) {
    console.log(name,age)
}

func1("大澤",37);

function func2(name: string,age?: number){
    console.log(name,age)
}

func2("大澤",37)
func2("大澤")

function func3(name: string,age?: number){

    console.log(`私の名前は${name}です。`)
    if(age){// 未定義の場合falseで出力しない
        console.log(`年齢は${age}です。`)
    }    
}


func3('大澤',37)
func3('大澤')


// age にデフォルト値を入れて置き、入力されていない場合は出力する。
function func4(name: string,age: number = 10){
    console.log(`私の名前は${name}です。`)
    console.log(`年齢は${age}です。`)
}

func4('和也',37)
func4('和也')

// 戻り値の型の指定
function addition(num1: number,num2: number): number{
    return num1 + num2
}

console.log(addition(1,2))