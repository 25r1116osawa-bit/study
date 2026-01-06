const Hello = () => {
    const onClick = () =>{
        alert("Hello World")
    }
    const text = 'はろー'
    
    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}
export default Hello