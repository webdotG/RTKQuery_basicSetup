import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (build) => ({

    getPosts : build.query({
      query: () => `/posts`,
    }),

    addPost: build.mutation({
      query: (body) => ({
        url: '/posts',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetPostsQuery, useAddPostMutation } = postsApi