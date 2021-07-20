import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from './TodoSlise'

export default configureStore({
  reducer: {
    toods: TodoReducer,
  },
})
