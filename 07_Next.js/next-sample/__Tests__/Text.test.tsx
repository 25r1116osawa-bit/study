import { render, screen } from '@testing-library/react'
import Text from '@/app/components/Text' // default export に合わせる

describe('Text Component', () => {
    // 今からどのようなテストを行うのか？
    it('正しいメッセージが表示されること',()=>{
        // レンダリング実行
        render(<Text text="あいうえお" />)
        // 出力パターン生成　今回は完全一致
        const heading = screen.getByText(/あいうえお/)
        // 結果の確認
        expect(heading).toBeInTheDocument()
    })
})