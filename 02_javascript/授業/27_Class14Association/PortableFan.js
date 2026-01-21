import Fan from "./Fan.js";
import Battery from "./battery.js";

// Fanを継承
export default class PortableFan extends Fan{

    #battery
    
    get battery(){
        return this.#battery
    }


    // PortableFanのコンストラクタ(Fanコンストラクタのオーバーライド)
    constructor(output,blades=5){
        // 親クラス(Fan)コンストラクタの呼び出し
        super(output,blades)

        // バッテリーオブジェクト
        this.#battery = new Battery()
    }

    // メソッドのオーバーライド(ポリモフィズム)
    pressSwingButton(){
        output.innerHTML += '首振り機能はありません' + '<br>'
        // 親クラスのプライベートプロパティにはアクセスできない
        // this.#swing = false
        // アクセサーを利用する
        this.swing = false
    }

    // メソッドのオーバーライド(ポリモフィズム)
    blowing(){
        if(this.battery.batteryLevel > 0){
            if(super.blowing()){
                this.battery.batteryLevel = 0
                output.innerHTML += `バッテリーの残量が0になりました。<br>`
            }else{
                output.innerHTML += `バッテリーの残量が減りませんでした。<br>`
            }
        }else{
            output.innerHTML += `バッテリーの残量が有りません。<br>`
        }
    }
}
