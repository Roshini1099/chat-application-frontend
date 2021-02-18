import axios from '../helpers/axios';
import  authHeader  from '../helpers/authheader';
export const chatService = {
	createChannel,
	joinChannel,
	searchChannel,
	Message,
};

//creating new channel
function createChannel(chatName, userId, type) {
	const channel = {
		chatName,
		userId,
		type,
	};

	return axios.post('/api/channel/newChannel', channel, { headers: authHeader() }).then((response) => {
		return response.data;
	});
}

function joinChannel(chatId, userId) {
	const channel = {
		chatId,
		userId,
	};
	return axios.post('/api/channel/joinchannel', channel, { headers: authHeader() }).then((response) => {
		return response.data;
	});
}
function searchChannel(searchString) {
	const data = {
		searchString,
	};
	return axios.get('/api/channel/search', data, { headers: authHeader() }).then((response) => {
		return response.data;
	});
}

async function Message(text, senderId, chatId, type, index, senderName) {
	console.log(text);
	const data = {
		text,
		senderId,
		chatId,
		type,
		index,
		senderName,
	};
	console.log(data);
	return await axios
		.post('/api/message', data, { headers: authHeader() })
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			console.log(err);
		});
}
