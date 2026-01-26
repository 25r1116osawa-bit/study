// 関数
// プログラム(処理)の塊のことです。

// click1という名前の関数を用意する
function click1(){
    // idがp1のtextContentに文字を代入
    document.getElementById('p1').textContent = '実行ボタンが押されました。'
}

function click2(){
    // idがp2のtextContentに文字を代入
    document.getElementById('p2').textContent = '実行ボタンが押されました。'
}

function click3(){
    // idがp1,p2のtextContentに文字を代入
    document.getElementById('p1').textContent='1つ目の内容'
    document.getElementById('p2').textContent='2つ目の内容'
    console.log();
}


//関数の書き方
//function 関数名() {処理}

fetch("https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLiTdszqC3oMVs6yHbL_Crc6pjgn0xW4HqO64XbaSfnpS4w0CRJqz1MiO0vUVAl0mlXH6pzcKYsI_2EiMnX0xFEJnULP2kgAD7tA5CG4acUv6WR-N3_24tyD0LP31qzvDVWFbT2hp-qUGigEDoEaqT_OymT3bXvT54KomIJ5qQRiImRctgwGVgLdVPvdTmxvYnkLA4VU_ln9yxPHiD6C0X_x75xFL689_tl3WuT62-s93JMX7YQM1kapj_xLVn2Iwh6llQcBV6LwK2jn5NybBoa7qxnKO9Gtgkx5IUyQ&lib=MPT5PSWAvXyvHuIQmMlOJ7ahLQ5Yc8jYk")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
