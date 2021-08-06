import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'
import { combineReducers } from 'redux'

const { SHOW_ALL } = VisibilityFilters

// abstract out of todoApp() the verbose code responsible for updating the todos
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, 
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if(index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}
/* "Note that todos also accepts state—but state is an array! 
Now todoApp gives todos just a slice of the state to manage, and todos knows how to update 
just that slice. This is called reducer composition, and it's the fundamental pattern of 
building Redux apps." */

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default: 
      return state
  }
}

/* function todoApp(state = initialState, action) {
 return {
   visibilityFilter: visibilityFilter(state.visibilityFilter, action),
   todos: todos(state.todos, action)
 }
} */

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp

