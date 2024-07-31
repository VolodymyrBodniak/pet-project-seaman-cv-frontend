import axios from 'axios';
axios.defaults.baseURL = '';

export const registration = async body => {
  const { data } = await axios.post('/auth/registration', body);
  return data;
};
