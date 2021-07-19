import { createSlice } from "@reduxjs/toolkit"import { action } from "commander"
 from '@reduxjs/toolkit'

const todoSlise = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state, action) {
      console.log(state)
      console.log(action)
      
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        complited: false,
      })
    },
    toggleTodoComplited() {},
    removeTodo() {}
  }
})

export {addTodo, toggleTodoComplited, removeTodo} = todoSlise.action.payload

export default todoSlice.reducers