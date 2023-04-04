import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../utils/constants'
import { ICategory } from '../interfaces/ICategory'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getCategories: builder.query<ICategory[], void>({
      query: () => '/categories/all',
    }),
    addCategory: builder.mutation({
      query: category => ({
        url: '/categories',
        method: 'POST',
        body: category,
      }),
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

export const { useGetCategoriesQuery, useAddCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation } =
  apiSlice
