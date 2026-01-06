// 列挙型

enum PowerLevel {
    STOP,
    LOW,
    MID,
    HI
}

let pow01: PowerLevel = PowerLevel.STOP
console.log(pow01)
pow01 = PowerLevel.HI
console.log(pow01)

enum PowerLevel2 {
    STOP = '停止',
    LOW = '低',
    MID = '中',
    HI = '高'
}

let pow02: PowerLevel2 = PowerLevel2.STOP
console.log(pow02)
pow02 = PowerLevel2.HI
console.log(pow02)
pow02 = '停止' as PowerLevel2
console.log(pow02)
