const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000'
});

export const executeSwiftCodeAPI = async (code, id) =>{
  const param = {
    code,
    id
  }
  const response = await axiosInstance.post('/api/v1/machine/5.5.2/run', param);
  return response.data;
}