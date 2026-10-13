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
      query: (id) => {
        return {
          url: `/api/products/${id}`,
          method: "DELETE",
          headers: { Authorization: `Bearer ${CookieServices.get("jwt")}` },
        };
      },
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetDashboardProductsQuery,
  useDeleteDashboardProductMutation,
} = productsApiSlice;
