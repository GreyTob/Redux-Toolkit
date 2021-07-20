import { useState } from 'react'
import InputField from './components/InputField.jsx'
import TodoList from './components/TodoList.jsx'

import './App.css'

function App() {
  const [text, setText] = useState('')

  const toggleTodoComplited = (todoId) => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id !== todoId) return todo
    //     return {
    //       ...todo,
    //       complited: !todo.complited,
    //     }
    //   })
    // )
  }

  const removeTodo = (todoId) => {
    // setTodos(todos.filter((todo) => todo.id !== todoId))
  }

  return (
    <div className="App">
      <InputField text={text} handlerInput={setText} handlerSubmit={addTodo} />

      <TodoList
        removeTodo={removeTodo}
        toggleTodoComplited={toggleTodoComplited}
      />
    </div>
  )
}

export default App
