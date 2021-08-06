/* 
  action types
*/

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO  = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 OTHER CONSTANTS 
*/

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/* 
  action creators
*/
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index}
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter}
}