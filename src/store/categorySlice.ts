import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../utils/constants'
import { ICategory } from '../interfaces/ICategory'

export const categorySlice = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getCategories: builder.query<ICategory[], void>({
      query: () => '/categories/all',
    }),
    getCategory: builder.query<ICategory, number>({
      query: id => `/categories/${id}`,
    }),
    addCategory: builder.mutation<ICategory, ICategory>({
      query: category => ({
        url: '/categories/add',
        method: 'POST',
        body: category,
      }),
      async onQueryStarted(category, { dispatch, queryFulfilled }) {
        const addResult = dispatch(
          categorySlice.util.updateQueryData('getCategories', undefined, categories => {
            categories.push(category)
          }),
        )

        try {
          await queryFulfilled
        } catch {
          addResult.undo()
        }
      },
    }),
    updateCategory: builder.mutation<ICategory, ICategory>({
      query: category => ({
        url: `/categories/edit`,
        method: 'PATCH',
        body: category,
      }),
      async onQueryStarted(category, { dispatch, queryFulfilled }) {
        const updateResult = dispatch(
          categorySlice.util.updateQueryData('getCategories', undefined, categories => {
            const index = categories.findIndex(c => c.id === category.id)
            categories[index] = category
          }),
        )

        try {
          await queryFulfilled
        } catch {
          updateResult.undo()
        }
      },
    }),
    deleteCategory: builder.mutation<void, number>({
      query: id => ({
        url: `/categories/${id}/remove`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const deleteResult = dispatch(
          categorySlice.util.updateQueryData('getCategories', undefined, categories => categories.filter(c => c.id !== id)),
        )

        try {
          await queryFulfilled
        } catch {
          deleteResult.undo()
        }
      },
    }),
  }),
})

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categorySlice
