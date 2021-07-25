import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addTodo } from './store/todoSlise.js'

import InputField from './components/InputField.jsx'
import TodoList from './components/TodoList.jsx'

import './App.css'

const App: React.FC = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({ text }))
    setText('')
  }

  return (
    <div className="App">
      <InputField text={text} handlerInput={setText} handlerSubmit={addTask} />

      <TodoList />
    </div>
  )
}

export default App
