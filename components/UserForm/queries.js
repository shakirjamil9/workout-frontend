import axios from 'axios';
import { baseURL } from '../../constants';

export const GENERATE_PLAN = async data => {
  const res = await axios.post(`${baseURL}/api/v1/generate-plan`, data);
  return res.data;
};
