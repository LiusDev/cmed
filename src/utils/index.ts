import { Metadata } from "@/types";
import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const fetcher = (url: string) => instance.get(url).then((res) => res.data);

export const doGet = async (url: string) => {
  let error = undefined
  let data = undefined
  try {
    data = await fetcher(url);
  } catch (er) {
    error = er
  }
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};

export const doPost = async <T>(url: string, body: T) => {
  let data = null;
  let error = null;
  let isLoading = true;

  try {
    const res = await instance.post(url, body);
    data = res.data;
  } catch (error: any) {
    error = error;
    console.log(error);
  } finally {
    isLoading = false;
  }

  return {
    data,
    error,
    isLoading,
  };
};

export const doPatch = async <T>(url: string, body: T) => {
  let data = null;
  let error = null;
  let isLoading = true;

  try {
    const res = await instance.patch(url, body);
    data = res.data;
  } catch (error: any) {
    error = error;
  } finally {
    isLoading = false;
  }

  return {
    data,
    error,
    isLoading,
  };
};

export const doDelete = async (url: string) => {
  let error = null;
  let isLoading = true;

  try {
    await instance.delete(url);
  } catch (error: any) {
    error = error;
  } finally {
    isLoading = false;
  }

  return {
    error,
    isLoading,
  };
};

export const getMetadata = async (): Promise<Metadata> => {
  return (await instance.get("/metadata")) || {};
};

// format 2023-12-27T21:04:56.000Z to 27/12/2023
export const formatDate = (date: string, splitChar: string = " - "): string => {
  const [year, month, day] = date.split("T")[0].split("-");
  return `${day}${splitChar}${month}${splitChar}${year}`;
};
