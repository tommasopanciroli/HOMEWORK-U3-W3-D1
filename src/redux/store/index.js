import { configureStore } from '@reduxjs/toolkit'
import mainReducers from '../reducers'

const myReduxStore = configureStore({
  reducer: mainReducers,
})

export default myReduxStore