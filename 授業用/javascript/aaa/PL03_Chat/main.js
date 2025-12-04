let inputtext = document.getElementById('inputtext');
let output = document.getElementById('output');

const PLAYERA = 1;
const PLAYERB = 2;
const RESETBUTTN = 0;

function btn(mode){
    let textarea = ""; // ローカル変数として宣言

    switch (mode) {
        case PLAYERA:
            textarea = inputtext.value;
            inputtext.value = ''
            textarea = `<span style="color:red;">${textarea}</span>`;
            break;

        case PLAYERB:
            textarea = inputtext.value;
            inputtext.value = ' '
            textarea = `<span style="color:blue;">${textarea}</span>`;
            break;

        case RESETBUTTN:
            textarea = " "
            inputtext.value = " " // 入力欄もリセット
            output.innerHTML = " "
            break;

        default:
            break;
    }

    // メッセージの生成
    let msg = `${textarea}`;
    // 出力処理
    output.innerHTML += msg + "<br>";

}
