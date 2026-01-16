// 値が変化する、取得する要素を予め変数に格納しておく
let innumber1 = document.getElementById('innumber1');
let innumber2 = document.getElementById('innumber2');
let counter = 0

const PLUS = 1
const MINUS = 2
const ZYOUSAN = 3
const WARIZAN = 4
const ZYOUYO = 5


function btn(mode){
    // modeはローカル変数
    switch (mode) {
        case PLUS:
          counter = Number(innumber1.value)+Number(innumber2.value)
            break;

        case MINUS:
          counter =   Number(innumber1.value)-Number(innumber2.value)
            break;

        case ZYOUSAN:
           counter = Number(innumber1.value)*Number(innumber2.value)
            break;    

        case WARIZAN:
          counter =  Number(innumber1.value)/Number(innumber2.value)
            break;    

        case ZYOUYO:
         counter =    Number(innumber1.value)%Number(innumber2.value)
            break;    
        default:
            break;
    }
    // メッセージの生成
    let msg = `${counter}`
    // 出力処理
    output.textContent = msg
}

