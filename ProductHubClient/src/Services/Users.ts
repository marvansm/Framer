import axios from "axios";
import type { AxiosInstance } from "axios";

const CreateInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:1337/api/",
  timeout: 1000,
});

export const PostUser = async (url: string, data: any) => {
  try {
    const res = await CreateInstance.post(url, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetUserData = async (url: string, option: any) => {
  const res = await CreateInstance.get(url, {
    ...option,
  });
  return res.data;
};
