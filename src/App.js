import { useState } from 'react'
import InputField from './components/InputField.jsx'
import TodoList from './components/TodoList.jsx'

import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          complited: false,
        },
      ])
    }
    setText('')
  }

  const toggleTodoComplited = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo

        return {
          ...todo,
          complited: !todo.complited,
        }
      })
    )
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId))
  }

  return (
    <div className="App">
      <InputField text={text} handlerInput={setText} handlerSubmit={addTodo} />

      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodoComplited={toggleTodoComplited}
      />
    </div>
  )
}

export default App
