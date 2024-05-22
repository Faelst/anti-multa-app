import axiosApi from '../axiosApi';

const url = '/user';

const generateConfigAxios = (token: string, params?: any) => {
  return {
    headers: { Authorization: `Bearer ${token}` },
    params
  };
};

export function getUserById(id: string, token: string) {
  return axiosApi.get(`${url}/${id}`, generateConfigAxios(token));
}
