import { configureStore } from '@reduxjs/toolkit'
import { categorySlice } from './categorySlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { giftSlice } from './giftSlice'

const store = configureStore({
  reducer: {
    [categorySlice.reducerPath]: categorySlice.reducer,
    [giftSlice.reducerPath]: giftSlice.reducer,
    // ... others
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(categorySlice.middleware, giftSlice.middleware),
})

export default store

setupListeners(store.dispatch)
