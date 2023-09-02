import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosError, AxiosRequestConfig } from "axios";
import axios from "axios";

export interface RtkQueryError {
  data: string;
  status: number;
}

export const axiosBaseQuery: BaseQueryFn<{
  url: string;
  method: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
}> = async ({ url, method, data, params }) => {
  try {
    const result = await axios({
      method: "get",
      url: url,
    });
    return { data: result?.data };
  } catch (axiosError) {
    const err = axiosError as AxiosError;
    if (typeof err.response?.data === "string") {
      return {
        error: {
          status: err.response?.status,
          data: err.message,
        },
      };
    }
    return {
      error: {
        status: err.response?.status,
        data: Object.values(err.response?.data ?? {})?.[0]?.[0] || err.message,
      },
    };
  }
};
