import Fan from "./Fan.js";

// Fanを継承
class PortableFan extends Fan{

    // 新規プロパティ
    #battery 

    set battery(battery){
        // Batteryバリデーション0 - 100
        if(0 <= battery && battery <= 100){
        this.#battery = battery
        }else{
            // 赤文字ででるようになる。
            console.error('想定外の値が入力されました。')
        }
    }

    get battery(){
        return this.#battery
    }

    // PortableFanのコンストラクタ
    constructor(){
        this.#battery = 80
    }

}
