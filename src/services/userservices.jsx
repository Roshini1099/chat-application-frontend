import { authHeader } from '../helpers/authheader';
import axios from '../helpers/axios';
export const userService = {
	login,
	logout,
	register,
};

function login(emailId, password)
{

	/*const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ emailId, password }),
	};
	const body = JSON.stringify({ emailId, password });
	axios
		.post(`/api/auth/login`, body)
		.then(handleResponse)
		.then((user) => {
			// store user details and jwt token in local storage to keep user logged in between page refreshes
			localStorage.setItem('user', JSON.stringify(user));
			console.log(user);

			return user;
		});*/
	console.log(emailId, password);
	const body = {
		emailId,
		password,
	};
	return axios
		.post('/api/auth/login', body)
		.then((response) =>
		{
			/*if (response.data.token) {
				localStorage.setItem('user', JSON.stringify(response.data));
			}
			return response.data;*/
			console.log(response);
		});
}

function logout()
{
	// remove user from local storage to log user out
	localStorage.removeItem('user');
}

function register(user)
{
	// console.log(emailId.emailId, password);
	const body = {
		emailId: user.emailId,
		password: user.password,
		userName: user.userName,
	};
	return axios
		.post('/api/auth/register', body)
		.then((response) =>
		{
			/*if (response.data.token) {
				localStorage.setItem('user', JSON.stringify(response.data));
			}
			return response.data;*/
			console.log(response);
		});
}

function handleResponse(response)
{
	return response.text().then((text) =>
	{
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401) {
				// auto logout if 401 response returned from api
				logout();
			}

			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}
