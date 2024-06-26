import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGift, BestFitGiftsArgs } from '../interfaces/IGift'
import { BASE_URL } from '../utils/constants'

export const giftSlice = createApi({
  reducerPath: 'giftApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getGifts: builder.query<IGift[], void>({
      query: () => '/gifts/all',
    }),
    getBestFitGifts: builder.query<IGift[], BestFitGiftsArgs>({
      query: ({ categories, numGifts }) => `/gifts/find-best-fit?categories=${categories.join(',')}&numGifts=${numGifts}`,
    }),
  }),
})

export const { useGetGiftsQuery, useLazyGetBestFitGiftsQuery } = giftSlice
