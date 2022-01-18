const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000'
});

export async function executeSwiftCodeAPI(code, id) {
  const param = {
    code,
    id
  }
  const response = await axiosInstance.post('/api/v1/machine/5.5.2/run', param);
  console.log(response);
  return response;
}

