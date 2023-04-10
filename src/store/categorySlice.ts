import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../utils/constants'
import { ICategory } from '../interfaces/ICategory'
import { FormDataProps } from '../components/AddCategoryForm/AddCategoryForm'

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
    addCategory: builder.mutation<ICategory, FormDataProps>({
      query: category => ({
        url: '/categories/add',
        method: 'POST',
        body: category,
      }),
      async onQueryStarted(category, { dispatch, queryFulfilled }) {
        const addResult = dispatch(
          categorySlice.util.updateQueryData('getCategories', undefined, categories => {
            //@ts-expect-error
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
    updateCategory: builder.mutation({
      query: category => ({
        url: `/categories/${category.id}`,
        method: 'PATCH',
        body: category,
      }),
    }),
    deleteCategory: builder.mutation({
      query: ({ id }) => ({
        url: `/categories/${id}`,
        method: 'DELETE',
        body: id,
      }),
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
