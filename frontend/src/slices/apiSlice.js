import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants.js";

console.log(BASE_URL, "BASE_URL");
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Products", "Order", "User"],
  endpoints: (builder) => ({}),
});
