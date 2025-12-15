let output = document.getElementById('output')

// クラス宣言
class humidifier {
    constructor(output){
        this.output = output
        this.Color = 0
        this.Timer = 0
        this.TankCapacity = false
        this.PowerButton = false
        this.HumidificationModes = 0
    }

    PushPower(){
        this.output.innerHTML += '電源が入りました。<br>'
    }
    SwitchMode(){
        this.output.innerHTML += '電源が入りました。<br>'
    }
    CallWater(){
        this.output.innerHTML += '電源が入りました。<br>'
    }
    LockChild(){
        this.output.innerHTML += '電源が入りました。<br>'
    }
    SwitchTimer(){
        this.output.innerHTML += '電源が入りました。<br>'
    }
}

// インスタンス化
let humidifier01 = new humidifier(output)


humidifier01.PushPower()