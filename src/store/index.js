import { configureStore } from '@reduxjs/toolkit'
import TodoSlise from './TodoSlise'

export default configureStore({
  reducer: {
    toods: TodoSlise,
  },
})
