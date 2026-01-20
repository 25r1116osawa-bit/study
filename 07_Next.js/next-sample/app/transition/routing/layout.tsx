export default ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <>
            <h1>画面遷移時のデータの受け渡し確認ページ</h1>
            {children}
        </>
    )
}