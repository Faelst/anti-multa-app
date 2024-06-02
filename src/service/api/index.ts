import { AxiosResponse } from 'axios';
import getAxiosInstance from './instance';

interface FetchTrafficInfractionsParams {
  vehiclePlate: string;
  chassi: string;
}

const api = {
  createSolicitation: async (data: any): Promise<AxiosResponse> => {
    const api = await getAxiosInstance();

    return api.post('/solicitation', data);
  },

  addAddress: async (data: any): Promise<AxiosResponse> => {
    const api = await getAxiosInstance();

    return api.post('/customer/add-address', data);
  },

  registerClient: async (data: any): Promise<AxiosResponse> => {
    const api = await getAxiosInstance();

    return api.post('/customer', data);
  },

  fetchTrafficInfractions: async ({
    vehiclePlate,
    chassi
  }: FetchTrafficInfractionsParams): Promise<AxiosResponse> => {
    const api = await getAxiosInstance();

    return api.get('/traffic-inflations', {
      params: { vehiclePlate, chassi }
    });
  }
};

export default api;
