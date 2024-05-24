import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import * as Qs from 'qs';

let instance: AxiosInstance | null = null;
const token = process.env.NEXT_PUBLIC_API_TOKEN;

const createAxiosInstance = async () => {
  const axiosParams: AxiosRequestConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    responseType: 'json' as const
  };

  return axios.create(axiosParams);
};

const getAxiosInstance = async () => {
  if (!instance) {
    instance = await createAxiosInstance();
  }

  return instance;
};

export default getAxiosInstance;
