import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StrategyType } from "types/StrategyTypes";

export interface CreateStreategyMutation {
  name: string;
  description: string;
}

export const strategyApi = createApi({
  reducerPath: "strategyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["Strategies"],
  endpoints: (builder) => ({
    getStrategy: builder.query<StrategyType[], number | void>({
      query: (limit = 10) => `/strategy?limit=${limit}`,
      providesTags: ["Strategies"],
    }),
    createStrategy: builder.mutation<any, CreateStreategyMutation>({
      query: (body) => ({
        url: `/strategy`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Strategies"],
    }),
    deleteStrategy: builder.mutation<CreateStreategyMutation, string>({
      query: (id) => ({
        url: `/strategy/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Strategies"],
    }),
  }),
});

export const {
  useGetStrategyQuery,
  useCreateStrategyMutation,
  useDeleteStrategyMutation,
} = strategyApi;
