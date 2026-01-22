// SSR（Server Side Rendering）
// いつ？リクエストごと
// どこで？ サーバー
// 常に最新データ SEO OK SSG よりは遅い サーバー負荷あり
// 用途：ニュース

import Text from "@/app/components/Text";
// eslint-disable-next-line react/display-name, import/no-anonymous-default-export
export default () => {
    return (<>
        <h2>SSR (Server Side Rendering - サーバーサイドレンダリング)</h2>
        <Text text="SSR実験のためのコードです。" />
    </>)
}