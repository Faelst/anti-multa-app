import { AxiosResponse } from 'axios';
import getAxiosInstance from './instance';
import { create } from 'lodash';

interface FetchTrafficInfractionsParams {
  vehiclePlate: string;
  chassi: string;
}

interface CreatePaymentParams {
  creditCard: {
    installments: number;
    number: string;
    holderName: string;
    expMonth: number;
    expYear: number;
    cvv: number;
  };
  solicitationId: string;
}

const api = {
  createPayment: async (data: CreatePaymentParams): Promise<AxiosResponse> => {
    const api = await getAxiosInstance();

    return api.post('/payment', data);
  },

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
