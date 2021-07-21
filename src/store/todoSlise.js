import { createSlice } from '@reduxjs/toolkit'
// import { action } from  '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        complited: false,
      })
    },
    toggleTodoComplited(state, action) {
      const toggleTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      )

      toggleTodo.complited = !toggleTodo.complited
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
  },
})

export const { addTodo, toggleTodoComplited, removeTodo } = todoSlice.actions

export default todoSlice.reducer
