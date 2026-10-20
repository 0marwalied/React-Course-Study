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
    getCategories: builder.query({
      query: () => ({
        url: `/api/categories?pagination[pageSize]=100`,
      }),
    }),
    deleteDashboardProduct: builder.mutation({
      query: (id: string) => ({
        url: `/api/products/${id}`,
        method: "DELETE",
        headers: { Authorization: `Bearer ${CookieServices.get("jwt")}` },
      }),
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
    createDashboardProduct: builder.mutation({
      query: (body) => ({
        url: `/api/products`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${CookieServices.get("jwt")}`,
        },
      }),
      invalidatesTags: ["Products"],
    }),
    // Upload file endpoint (for uploading images, etc.)
    uploadFile: builder.mutation({
      query: (body: FormData) => ({
        url: `/api/upload`,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${CookieServices.get("jwt")}`,
        },
      }),
    }),
  }),
});

export const {
  useGetDashboardProductsQuery,
  useGetCategoriesQuery,
  useDeleteDashboardProductMutation,
  useUpdateDashboardProductMutation,
  useCreateDashboardProductMutation,
  useUploadFileMutation,
} = productsApiSlice;
