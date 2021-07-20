import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = ({ toggleTodoComplited, removeTodo }) => {
  const todos = useSelector()

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodoComplited={toggleTodoComplited}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
