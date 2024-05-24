import { AxiosResponse } from 'axios';
import getAxiosInstance from './instance';

interface FetchTrafficInfractionsParams {
  vehiclePlate: string;
  chassi: string;
}

const api = {
  registerClient: async (data: any): Promise<AxiosResponse> => {
    const api = await getAxiosInstance();

    return api.post('/clients', data);
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
