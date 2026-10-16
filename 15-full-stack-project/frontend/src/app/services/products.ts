import CookieServices from "@/services/CookieServices";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Products"],
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
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
      providesTags: ["Products"],
    }),
    deleteDashboardProduct: builder.mutation({
      query: (arg) => {
        const { id, data } = arg;
        return {
          url: `/api/products/${id}`,
          method: "DELETE",
          headers: { Authorization: `Bearer ${CookieServices.get("jwt")}` },
          body: data,
        };
      },
      invalidatesTags: ["Products"],
    }),
    updateDashboardProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/products/${id}`,
        method: "PUT",
        body,
        headers: {
          Authorization: `Bearer ${CookieServices.get("jwt")}`,
        },
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetDashboardProductsQuery,
  useDeleteDashboardProductMutation,
  useUpdateDashboardProductMutation,
} = productsApiSlice;
