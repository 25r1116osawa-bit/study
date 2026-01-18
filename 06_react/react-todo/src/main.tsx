import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Person from './components/01props'
import Counter from './components/02usestat'
import Effect from './components/03再レンダリング'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Person text="tatsuki" message='こんにちわあ'>aaa</Person>
    <Counter/>
    <Effect/>
  </StrictMode>
)
