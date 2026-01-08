➀05_TypeScriptのフォルダ作成
➁直下にscript.tsファイル作成
③script.tsファイル内へ以下を書き込み
const message: string = "HelloWorld"
console.log(message)
// tsc script.ts  js生成 tsは人間語
// node script.js js実行 jsは機械語
// 裏技エクスポート。使用しない方が良い
④統合ターミナルで以下コマンド実行
1 tsc script.ts --outDir dist
2 node .\dist\script.js


バーチャルボックスを仕事で使うならvagrantを使うことが推奨。

KVN(カーネル-based virtualmachine)
kvmを簡単に使うためのコックピット（サーバーマシンのヘルスチェック用）
osに入れて仮想マシンを立てていた。


# VM
「サーバー特化」=「Aurora（Amazon Aurora）」＋「Rocky Linux」

汎用=ubuntsu

WSL2 (Windows subsystem )
ハイパーパイザー：仮想マシンを立てるためのソフトウェア


hypervisorのイメージ
![alt text](image.png)



dockerのイメージ
![alt text](image-1.png)

間にOSを挟まなくても動作し、アプリ間の連携はないため、セキュリティを確保することができる。


hypervisor型を使って仮想環境を実現する。

コンテキストは範囲を指定する
providerで囲っている部分

<context12 />
usecontect は変数に入れるだけで使えるので、フックの方が楽
consumerタグでもいけるがアロー関数で仮引数でhtmlを定義

useContext はフック（Hook）です。
正確には何をするフック？

useContext は
👉 Context の値を読み取るためのフックです。

Context.Provider で渡された値を取得する

props をバケツリレーせずに済む
contextは引数を複数いれることができる。

なぜ初学者に分かりにくいのか
① Context と Hook が別物なのにセットで出てくる

初学者目線だと、だいたいこう見えます👇

createContext

Context.Provider

useContext

→ 全部同じ仲間に見える

でも実際は役割が違います。

Context      = 仕組み（箱）
Provider     = 値を入れる人
useContext   = 値を読む道具（フック）


ここを明確に区別しないまま説明されることが多いんです。

② 「use〜 = フック」というルールをまだ知らない

初期段階では、

useState はフック

useEffect もフック

useContext …？？？

となりがちです。

「useから始まる＝フック」
というReactの約束を知らないと、
useContext がなぜ特別扱いされるのか分かりません。

③ Provider はフックじゃないのに関数っぽい
<UserContext.Provider value={user}>


見た目は関数っぽい

JSXの中にある

なのに「フックじゃない」

→ 混乱ポイントです。

これはただの「コンポーネント」だと
初心者向けに強調されることが少ないです。

④ 「なぜ props じゃダメなの？」が腑に落ちていない

多くの初学者は、

props で渡せるなら Context いらなくない？

と思います（正しい感覚）。

でも

props が何階層も続く

グローバルな状態が必要

という痛みをまだ経験していないと、
Context + useContext のありがたさが実感できません。

初学者向けの一番わかりやすい整理

これだけ覚えると一気に楽になります👇

Context       = データの通り道を作る
Provider      = データを流す
useContext    = データを受け取る（フック）


そして

use〇〇 = フック → ルール厳守

結論

✅ はい、初期の話でかなり分かりにくい

❌ 初学者の理解力不足ではない

🔑 「役割の分離」を意識すると一気に整理できる

もし今

独学

チュートリアル途中

useContext を「なんとなく」使っている

なら、むしろ健全な疑問です。

必要なら
「初学者向けの最短ルート理解図」
「useContextを使うべき/使わないべき判断基準」
も説明しますよ。