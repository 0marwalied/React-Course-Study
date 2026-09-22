import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}`, // Replace with your API base URL
  }),
  endpoints: (builder) => ({
    getDashboardProducts: builder.query({
      query: (arg) => {
        const { page } = arg;
        return {
          url: `/api/products?populate=category,thumbnail&pagination[page]=${page}&pagination[pageSize]=7`,
        };
      },
    }),
  }),
});

export const { useGetDashboardProductsQuery } = apiSlice;
