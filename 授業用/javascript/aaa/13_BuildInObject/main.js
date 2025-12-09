// 出力先の要素を習得
let output = document.getElementById('output')

// 標準組み込みオブジェクト

// Mathオブジェクト
// 計算を行うオブジェクト
function random(min,max){
    max++
    return Math.floor(Math.random() * (max - min) + min)
}

output.innerHTML += random(0,100) + '<br>'
output.innerHTML += random(50,150) + '<br>'

// Dateクラス
output.innerHTML += '日付型' + '<br>'

// 現在時刻の取得
let today = new Date()
output.innerHTML += today + '<br>'

// 日本でよく使われる形式に変換
output.innerHTML += today.toLocaleString('ja-JP') + '<br>'

// 日付を指定した日時を取得
let day1 = new Date('2025/12/09')
output.innerHTML += day1.toLocaleString('ja-JP') + '<br>'

// 日付と時刻を指定した日時を取得
let day2 = new Date('2025/12/09 14:50')
output.innerHTML += day2.toLocaleString('ja-JP') + '<br>'

// 日付を指定した日時を取得(月は0から始まるので、-1を指定する。)
let day3 = new Date(2025,11,9)
output.innerHTML += day3.toLocaleString('ja-JP') + '<br>'

// 日付を指定した日時を取得
let day4 = new Date(2025,11,9,18,30)
output.innerHTML += day4.toLocaleString('ja-JP') + '<br>'

// 日付を指定した日時を取得
let day5 = new Date(1765260000000)
output.innerHTML += day5.toLocaleString('ja-JP') + '<br>'

// 日付を指定した日時を取得
let day6 = new Date(0)
output.innerHTML += day6.toLocaleString('ja-JP') + '<br>'

// JavaScriptには日付フォーマットを行う標準クラスは無い
// なので、自作する。

function dateFormat(inputDate){
    let yyyy = inputDate.getFullYear().toString().padStart(4,'0')
    let MM = (inputDate.getMonth() + 1).toString().padStart(2,'0')
    let dd = inputDate.getDate().toString().padStart(2,'0')
    let hh = inputDate.getHours().toString().padStart(2,'0')
    let mm = inputDate.getMinutes().toString().padStart(2,'0')
    let ss = inputDate.getSeconds().toString().padStart(2,'0')

    // .padStart(4,'0') は4桁で0埋めする処理
    const elements = ['日','月','火','水','木','金','土']
    let EE = elements[inputDate.getDay()]

    return `${yyyy}/${MM}/${dd} (${EE}) ${hh}:${mm}:${ss}<br>`
}

output.innerHTML += dateFormat(day1)

// 日付の計算
output.innerHTML += day2 - day1 + '<br>'
// タイムゾーンに気をつける
output.innerHTML += new Date(day2 - day1).toLocaleString('ja-JP') + '<br>'

// タイムゾーンに振り回されない計算方法
let day7 = new Date(day2 - day1 + 1000)
let hh = Math.floor(day7 / 1000 / 60 / 60).toString().padStart(2,'0')
let mm = Math.floor(day7 / 1000 / 60 % 60).toString().padStart(2,'0')
let ss = Math.floor(day7 / 1000 % 60 ).toString().padStart(2,'0')
output.innerHTML += `${hh}:${mm}:${ss}<br>`

const pikachu = {
  name: "ピカチュウ",      // 性格（データ）
  type: "でんき",

  // できること（メソッド）
  attack: function() {
    output.innerHTML += "ピカチュウは10まんボルトを使った！<br>";
  }
};

output.innerHTML += pikachu.name + "（タイプ：" + pikachu.type + "）<br>";
pikachu.attack()



class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  attack() {
    return `${this.name}は10まんボルトを使った！`;
  }
}

const pikachu1 = new Pokemon("ピカチュウ", "でんき");

output.innerHTML += `${pikachu.name}（タイプ：${pikachu.type}）<br>`;
output.innerHTML += pikachu1.attack() + "<br>";
