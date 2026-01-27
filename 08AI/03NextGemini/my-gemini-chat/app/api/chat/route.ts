import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// インスタンス化及びAPIキーの設定
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)



// Geminiへ投稿とその返事を受け取るメソッド
// 型はその時によって変わる可能性があるので指定なしです。(any型)
// これでapiの定義は完了しており、formからこのroutingにアクセスがあった時
// POSTであればこのメソッドが動作する。
// ※メソッド名をGETにすれば、GET用の処理を作成できます。
export async function POST(req:Request) {
    try {
        const {message} = await req.json();

        // モデルの指定
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash"})

        // AI へリクエストを送信 返事を受信
        const result = await model.generateContent(message)
        // 返事の結果から、返信内容を取得
        const response = await result.response
        // 返信内容から生成文を抽出
        const text = response.text()

        // json形式でリターン
        return NextResponse.json({text})
    }catch (error){
        console.error(error)
        return NextResponse.json({error: "エラーが発生しました。"},{status:500})
    }
}