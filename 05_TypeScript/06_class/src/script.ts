// クラス

class Person{
    private name: string
     age: number

    constructor(name: string,age: number){
        this.name = name
        this.age = age
    }

    greeting(){
        console.log(`私の名前は ${this.name} です。私の年齢は ${this.age} 歳です。`)
    }

}

let emp1 = new Person('木内',37)
emp1.greeting()

console.log(emp1.age)

