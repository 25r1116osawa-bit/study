// Propsの注意点：props は必ず型を書く
// propsを使う際は型指定が必須
// return は<></>が必要
// コンポーネント名は大文字　PersonTasuki など

// Person.tsx
interface PersonProps {
  text: string
  message: string
  children: React.ReactNode
}

const Person = (props: PersonProps) => {
  return (
    <div>
      <p>{props.text}さん</p>
      <p>{props.message}</p>
      <p>{props.children}</p>
    </div>
  )
}

export default Person
