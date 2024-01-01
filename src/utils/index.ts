import { Metadata } from "@/types";
import axios from "axios";
export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getMetadata = async (): Promise<Metadata> => {
    return (await instance.get("/metadata")) || {};
};

// format 2023-12-27T21:04:56.000Z to 27/12/2023
export const formateDate = (date: string): string => {
    const [year, month, day] = date.split("T")[0].split("-");
    return `${day}/${month}/${year}`;
};
