import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoComplited } from '../store/todoSlise'

const TodoItem = ({ id, text, complited }) => {
  const dispatch = useDispatch()

  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={complited}
        onChange={() => dispatch(toggleTodoComplited({ id }))}
      />

      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </li>
  )
}

export default TodoItem
