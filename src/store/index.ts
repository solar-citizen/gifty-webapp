import { configureStore } from '@reduxjs/toolkit'
import { categorySlice } from './categorySlice'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
  reducer: {
    [categorySlice.reducerPath]: categorySlice.reducer,
    // ... others
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(categorySlice.middleware), // (categorySlice.middleware, otherSlice.middleware, ...)
})

export default store

setupListeners(store.dispatch)
