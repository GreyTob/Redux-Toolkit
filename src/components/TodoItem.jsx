const TodoItem = ({ id, text, complited, toggleTodoComplited, removeTodo }) => (
  <li key={id}>
    <input
      type="checkbox"
      checked={complited}
      onChange={() => toggleTodoComplited(id)}
    />

    <span>{text}</span>
    <span className="delete" onClick={() => removeTodo(id)}>
      &times;
    </span>
  </li>
)

export default TodoItem
