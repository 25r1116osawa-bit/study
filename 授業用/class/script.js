import BaseClass from "../comon/BaseClass.js"


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
export default class  HumidifierControler extends BaseClass {
    // コンストラクタ(メソッド)の宣言
    colorCode
    timerOff
    tankCapacity
    powerButton
    humidificationModes
    //childLock
    output

    constructor() {
        // 各値を初期化
        this.colorCode = 0
        this.timerOff = 0
        this.tankCapacity = 0
        this.powerButton = 0
        this.humidificationModes = 0
        this.output = output
    }

    // メソッド(関数)
    // 加湿器の電源を「つける」または「消す」動きをする機能 (切/入ボタンは1つ)
    // 戻り値：boolean
    // pushPower (){   
    //     if(this.powerButton == 0 ){
    //         this.powerButton = 1
    //         powerStatus.innerHTML = "オン"
    //     }else{
    //         this.powerButton = 0
    //         powerStatus.innerHTML = "オフ"
    //     }
    // }
    // pushPower 大城が変更
    // メソッド(関数)
    // 加湿器の電源を「つける」または「消す」動きをする機能 (切/入ボタンは1つ)
    // 戻り値：boolean


    pushPower() {
        // 電源オフの状態の時、powerButton=0 を powerButton=1 へ変更
        if (this.powerButton == 0 && lockStatus.classList.value == "status-unlocked") {
            this.powerButton = 1;
            powerStatus.innerHTML = "オン"


        } else {
            this.powerButton = 0;
            powerStatus.innerHTML = "オフ"


        }
    }




    // 弱・中・強を選んだり、状況に合わせて加湿の強さを変える（弱中強ボタンは一つ）
    // 戻り値：number


    switchMode() {
        if (this.powerButton == 1 && lockStatus.classList.value == "status-unlocked") {
            switch (this.humidificationModes) {
                case 0:
                    modeStatus.innerHTML = '弱';
                    this.humidificationModes = 1;
                    break;

                case 1:
                    modeStatus.innerHTML = '中';
                    this.humidificationModes = 2;
                    break;

                default:
                    modeStatus.innerHTML = '強';
                    this.humidificationModes = 0;
                    break;
            }
        }
    }

    // 「水を入れてね」とランプでお知らせする機能

    callWater() {
        if (this.tankCapacity === 0 && this.powerButton == 1 && lockStatus.classList.value == "status-unlocked") {
            waterAlert.style.display = "inline-block";
        } else {
            waterAlert.style.display = "none";
        }
        console.log(this.tankCapacity)
    }



    // 子どもがボタンを押しても動かないようにする、安全用の機能
    //let isLocked = false; 

    lockChild() {
        if (lockStatus.classList.value == "status-unlocked") {
            lockStatus.textContent = 'ロック中';
            lockStatus.classList.remove('status-unlocked');
            lockStatus.classList.add('status-locked');

            console.log("チャイルドロックが有効になりました。");
        } else {
            lockStatus.textContent = '解除';
            lockStatus.classList.remove('status-locked');
            lockStatus.classList.add('status-unlocked');

            console.log("チャイルドロックが解除されました。");
        }
    }



    // 時間が来たら自動で電源が切れる機能（2時間、4時間）ボタンは一つ
    switchTimer() {
        if (this.powerButton == 1 && this.timerOff == 0 && lockStatus.classList.value == "status-unlocked") {
            const fn = function () {
                timerStatus.innerHTML = "2時間経過";
                this.powerButton = 0
                powerStatus.innerHTML = "オフ"
                this.timerOff = 1
            }.bind(this);
            const tm = 1000
            //((10000*6)*60)*2
            setTimeout(fn, tm);


        } else if (this.powerButton == 1 && this.timerOff == 1 && lockStatus.classList.value == "status-unlocked") {
            const fn = function () {
                timerStatus.innerHTML = "4時間経過";
                this.powerButton = 0
                powerStatus.innerHTML = "オフ"
                this.timerOff = 2
            }.bind(this);
            const tm = 2000
            //((10000*6)*60)*4
            setTimeout(fn, tm);

        } else {
            timerStatus.innerHTML = "OFF";
        }


    }

}

let Humidifier = new HumidifierControler()



pushPowerButton.addEventListener('click', () => Humidifier.pushPower());
switchModeButton.addEventListener('click', () => Humidifier.switchMode());
// 水が0のときにという設定が必要
callWaterButton.addEventListener('click', () => Humidifier.callWater());
lockChildButton.addEventListener('click', () => Humidifier.lockChild());
switchTimerButton.addEventListener('click', () => Humidifier.switchTimer());


