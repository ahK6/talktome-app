import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost, IPostList, IPostParams } from "../types/posts.types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.1.2:3000/" }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPostList, IPostParams>({
      query: ({ page = 1, pageSize = 10, type = "helping" }) =>
        `posts/get-all?page=${page}&pageSize=${pageSize}&type=${type}`,

      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        // Retorna una clave única basada en el tipo
        return `${endpointName}-${queryArgs.type}`;
      },

      // Siempre retorna un nuevo objeto al mezclar los datos
      merge: (currentCache, newItems, { arg }) => {
        if (arg.page === 1) {
          // Retorna un nuevo objeto con los nuevos datos
          return { ...newItems };
        } else {
          // Acumula los datos en un nuevo objeto
          return {
            ...currentCache,
            data: [...currentCache.data, ...newItems.data],
          };
        }
      },

      // Forza la recarga cuando cambian ciertos argumentos
      forceRefetch({ currentArg, previousArg }) {
        if (currentArg?.page === 1) {
          return false;
        }
        // Forza la recarga cuando cambia el tipo o la página
        return currentArg?.page !== previousArg?.page;
      },
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
