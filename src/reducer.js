import { combineReducers } from 'redux'

import todosReducer from './features/todos/todoSlice'
import filtersReducer from './features/todos/filtersSlice'

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer
