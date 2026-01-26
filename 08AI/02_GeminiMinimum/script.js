// APIキーの設定（取得したキーをここに入力してください）
const API_KEY = "AIzaSyCKsWkT0m3L0BZsBrTCC0FbLpAbiKNPo0g";
// 使用するモデルの指定
const MODEL_NAME = "gemini-2.5-flash";
// APIエンドポイントのバージョン
const API_VERSION = "v1";
// エンドポイント生成
const ENDPOINT = `https://generativelanguage.googleapis.com/${API_VERSION}/models/${MODEL_NAME}:generateContent?key=${API_KEY}`

// 出力フィールドのエレメント
const output = document.getElementById('output')

function action() {
    // 出力フィールドを初期化
    output.innerHTML = '動作チェック<br>'
    // プロンプトを定義
    const prompt = 'こんにちは、自己紹介してください。'
    output.innerHTML += `プロンプト：${prompt}<br>`

    // GeminiAPIへ送信するデータの生成
    const sendData = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
        })
    }

    // API送信
    sendAPI(sendData)
  .then(msg => {
      output.innerHTML += `返信：${msg}<br>`;
  })
  .catch(err => {
      console.error(err);
      output.innerHTML += `エラー：${err.message}<br>`;
  });

    
}

// データ送信関数
async function sendAPI(data) {
    const response = await fetch(ENDPOINT, data);
    const resData = await response.json();

    console.log(resData);

    // ① candidates が無い場合
    if (!resData.candidates) {
        throw new Error(resData.error?.message || '不明なエラー');
    }

    // ② ここに来たら成功が保証される
    return resData.candidates[0].content.parts[0].text;
}
