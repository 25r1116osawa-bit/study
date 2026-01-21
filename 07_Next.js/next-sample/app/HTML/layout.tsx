const SampleLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <h1>Sample Layout1</h1>
            {children}
        </>
    )
}

export default SampleLayout;