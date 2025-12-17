

export default class Battery{
    
    // バッテリー残量
    #batteryLevel

    set batteryLevel(batteryLevel){
        // Batteryバリデーション0 - 100
        if(0 <= batteryLevel && batteryLevel <= 100){
            this.#batteryLevel = batteryLevel
        }else{
            console.error('想定外の値が入力されました。')
        }
    }

    get batteryLevel(){
        return this.#batteryLevel
    }

    constructor(){
        // 子クラス(PortableFan)の独自初期化処理
        this.#batteryLevel = 80
    }

    // 新規メソッド(サブクラス専用メソッド)
    // 充電
    charge(){
        this.#batteryLevel = 100
    }
}
