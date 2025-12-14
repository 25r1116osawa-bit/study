// 出力先の要素を習得
let powerStatus = document.getElementById("powerStatus")
let modeStatus = document.getElementById("modeStatus")
let timerStatus = document.getElementById("timerStatus")
let waterAlert = document.getElementById("waterAlert")
let lockStatus = document.getElementById("lockStatus")
let output = document.getElementById("output")


let pushPowerButton = document.getElementById("pushPowerButton");
let switchModeButton = document.getElementById("switchModeButton");
let callWaterButton = document.getElementById("callWaterButton");
let lockChildButton = document.getElementById("lockChildButton");

// クラスの宣言
class HumidifierControler {
    // コンストラクタ(メソッド)の宣言
    constructor(){
        // 各値を初期化
        this.colorCode = 0
        this.timerOff = 0
        this.tankCapacity = 0
        this.powerButton = 0
        this.humidificationModes = 0
        this.childLock = 0
        this.output = output
    }

    // メソッド(関数)
    // 加湿器の電源を「つける」または「消す」動きをする機能 (切/入ボタンは1つ)
    // 戻り値：boolean
    pushPower (){   
        if(this.powerButton == 0 ){
            this.powerButton = 1
            powerStatus.innerHTML = "オン"
        }else{
            this.powerButton = 0
            powerStatus.innerHTML = "オフ"
        }
    }

    // 弱・中・強を選んだり、状況に合わせて加湿の強さを変える（弱中強ボタンは一つ）
    // 戻り値：number
    switchMode (){
        if(this.powerButton == 1){
    if(this.humidificationModes == 0){ 
        modeStatus.innerHTML = '弱';
        this.humidificationModes = 1;
        return;
    }

    if(this.humidificationModes == 1){ 
        modeStatus.innerHTML = '中';
        this.humidificationModes = 2;
        return;
    }

    if(this.humidificationModes == 2){ 
        modeStatus.innerHTML = '強';
        this.humidificationModes = 0;
        return;
    }
}
}

    // 「水を入れてね」とランプでお知らせする機能
    callWater (){
        if(this.tankCapacity == 0 && this.powerButton == 1){
        alert('水を入れてね')
        }
    }


    // 子どもがボタンを押しても動かないようにする、安全用の機能
    lockChild (){
    if (this.childLock === 0) {
        this.childLock = 1;
        lockStatus.innerHTML = "チャイルドロック：ON";
    } else {
        this.childLock = 0;
        lockStatus.innerHTML = "チャイルドロック：OFF";
    }
}
    

    // 時間が来たら自動で電源が切れる機能（2時間、4時間）ボタンは一つ
    switchTimer(){
        countd

    }
}

let Humidifier = new HumidifierControler()



pushPowerButton.addEventListener('click', () => Humidifier.pushPower());
switchModeButton.addEventListener('click', () => Humidifier.switchMode());
// 水が0のときにという設定が必要
callWaterButton.addEventListener('click', () => Humidifier.callWater());
lockChildButton.addEventListener('click', () => Humidifier.lockChild());




