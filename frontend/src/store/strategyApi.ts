import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StrategyType } from "types/StrategyTypes";

export interface CreateStreategyMutation {
  name: string;
  description: string;
}

export interface CreateStrategyMutationResponse {
  acknowledged: boolean;
  deletedCount: number;
}

export const strategyApi = createApi({
  reducerPath: "strategyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["Strategies"],
  endpoints: (builder) => ({
    getStrategy: builder.query<StrategyType[], void>({
      query: () => `/strategy`,
      providesTags: ["Strategies"],
    }),
    createStrategy: builder.mutation<
      CreateStrategyMutationResponse,
      CreateStreategyMutation
    >({
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
