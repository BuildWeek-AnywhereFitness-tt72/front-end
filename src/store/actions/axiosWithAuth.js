import axios from 'axios';

export function axiosWithAuth() {
	const token = localStorage.getItem('token');
	return axios.create({
		headers: {
			Authorization: `Bearer ${token}`,
		},
		baseURL: 'https://tt72-anyfit.herokuapp.com',
	});
}
