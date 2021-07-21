import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from './todoSlise'

export default configureStore({
  reducer: {
    todos: TodoReducer,
  },
})
