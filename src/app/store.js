import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from '../features/counterSlice'

export default configureStore({
  reducer: {counter: sliceReducer,},
})
const initialState = { items: [] }

export function add_cart(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'items/add') {
      // If so, make a copy of `state`
      return {
        ...state,
        // and update the copy with the new value
        value: state.value + 1
      }
    }
    // otherwise return the existing state unchanged
    return state
  }