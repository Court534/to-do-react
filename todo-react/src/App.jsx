import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Todo from './components/Todo'

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0]`
}

function App() {
  const [todos, setTodos] = useState(['Learn React', 'Grind Codewars'])

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>
          To Do App
        </h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="What do you need to do?" />
          <button className={style.button}><AiOutlinePlus size={30} /></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
