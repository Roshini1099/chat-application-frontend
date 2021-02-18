import  authHeader  from '../helpers/authheader';
import axios from '../helpers/axios';
export const userService = {
	login,

	register,
	userDetails,
	editUserDetails,
};

function login(emailId, password) {

	console.log(emailId, password);
	const body = {
		emailId,
		password,
	};
	return axios.post('/api/auth/login', body).then((response) => {
		if (response.data.token) {
			localStorage.setItem('user', JSON.stringify(response.data));
			localStorage.setItem('token', JSON.stringify(response.data.token));
			localStorage.setItem('userId', JSON.stringify(response.data.user._id));
		}
		return response.data;
	});
}

function register(user) {
	// console.log(emailId.emailId, password);
	const body = {
		emailId: user.emailId,
		password: user.password,
		userName: user.userName,
	};
	return axios.post('/api/auth/register', body).then((response) => {

		console.log(response);
	});
}

function userDetails(userId) {
	const data = {
		userId,
	};
	return axios.get('/api/user/details', data,{ headers: authHeader() }).then((response) => {
		return response.data;
	});
}
function editUserDetails(userId, userName, status, profileImage, phoneNumber) {
	const data = {
		userId,
		userName,
		status,
		profileImage,
		phoneNumber,
	};
	return axios.get('/api/user/edit', data).then((response) => {
		return response.data;
	});
}
