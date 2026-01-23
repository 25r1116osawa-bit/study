import { render, screen } from '@testing-library/react'
import Text from '@/app/components/Text' // default export に合わせる

describe('Text component', () => {
  it('正しいメッセージが表示されること', () => {
    render(<Text text="あいうえお" />)
    const heading = screen.getByText('あいうえお')
    expect(heading).toBeInTheDocument() // jest-dom の拡張
  })
})
