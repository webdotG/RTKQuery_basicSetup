import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({

    getPosts: build.query({
      query: (limit = 3) => `/posts?_limit=${limit}`,
      providesTags: (result) => result
        ? [
          ...result.map(({ id }) => ({ type: 'Posts', id })),
          { type: 'Posts', id: 'List' },
        ]
        : [
          { type: 'Posts', id: 'List' }
        ]
    }),

    addPost: build.mutation({
      query: (body) => ({
        url: '/posts',
        method: 'POST',
        body
      }),
      invalidatesTags: [{type: 'Posts', id: 'List'}]
    }),

    deletePost: build.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: {type: 'Posts', id: 'List'}
    })
    
  })
})

export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } = postsApi