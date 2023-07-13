import axios from 'axios';
import { ConfigName } from '../constants';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.API_URL || 'http://localhost:1323',
});

const token = localStorage.getItem(ConfigName.ACCESS_TOKEN) || 'token';

export const axiosInstanceWithToken = axios.create({
    baseURL: import.meta.env.API_URL || 'http://localhost:1323',
    headers: {
        Authorization: `Bearer ${token}`
    },
});
