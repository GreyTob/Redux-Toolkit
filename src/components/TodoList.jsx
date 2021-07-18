import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodoComplited, removeTodo }) => (
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

export default TodoList
