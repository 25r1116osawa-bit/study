
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
