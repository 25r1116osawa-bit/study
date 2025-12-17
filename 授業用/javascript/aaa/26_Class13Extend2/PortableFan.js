import Fan from "./Fan.js";

// Fanを継承
export default class PortableFan extends Fan{

    // 新規プロパティ(サブクラス専用プロパティ)
    // バッテリー
    #battery

    set battery(battery){
        console.log('aaa'+battery)
        console.log('bbb'+this.#battery)
        // Batteryバリデーション0 - 100
        if(0 <= battery && battery <= 100){
            this.#battery = battery
        }else{
            console.error('想定外の値が入力されました。')
        }
    }

    get battery(){
        return this.#battery
    }

    // PortableFanのコンストラクタ(Fanコンストラクタのオーバーライド)
    constructor(output,blades=5){
        // 親クラス(Fan)コンストラクタの呼び出し
        super(output,blades)
        
        // 子クラス(PortableFan)の独自初期化処理
        this.#battery = 80
    }

    // メソッドのオーバーライド(ポリモフィズム)
    pressSwingButton(){
        output.innerHTML += '首振り機能はありません' + '<br>'
        // 親クラスのプライベートプロパティにはアクセスできない
        // this.#swing = false
        // アクセサーを利用する
        this.swing = false
    }

    // 新規メソッド(サブクラス専用メソッド)
    // 充電
    charge(){
        this.#battery = 100
    }
    
    // メソッドのオーバーライド(ポリモフィズム)
    blowing(){
        console.log('ccc'+this.battery)
        if(this.battery > 0){
            if(super.blowing()){
                this.battery = 0
                output.innerHTML += `バッテリーの残量が0になりました。<br>`
            }else{
                output.innerHTML += `バッテリーの残量が減りませんでした。<br>`
            }
        }else{
            output.innerHTML += `バッテリーの残量が有りません。<br>`
        }
    }
}
