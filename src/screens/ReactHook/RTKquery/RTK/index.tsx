import { axiosBaseQuery } from './axiosBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'

export const emptySplitApi = createApi({
  baseQuery: axiosBaseQuery,
  endpoints: () => ({}),
  keepUnusedDataFor: 0,
})