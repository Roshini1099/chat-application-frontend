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
	return axios.post('/api/auth/login', body).then(async(response) => {
		if (response.data.token) {
			localStorage.setItem('user', JSON.stringify(response.data));
			localStorage.setItem('token', JSON.stringify(response.data.token));
			localStorage.setItem('userId', response.data.user._id);
			// let val = localStorage.getItem('userId')
			let data = await userDetails(response.data.user._id)
			console.log(data)
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
	console.log(data)
	return axios.post('/api/user/details', data).then((response) => {
		console.log(response)
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
