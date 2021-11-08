import axios from 'axios';

import { getToken, removeAccess, removeToken } from './commonFunctions';

const api = axios.create();

api.interceptors.request.use(
	function (config) {
		config.headers.Authorization = `Bearer ${getToken()}`;
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	(response) => {
		return response;
	},
	function (error) {
		if (error.response) {
			if (error.response.status === 401) {
				alert('token expired🔒 \nLogin again♥♥');
				window.location.href = '/login';
				removeToken();
				removeAccess();
				return Promise.reject(error);
			}
		}
		return Promise.reject(error);
	}
);

export default api;
