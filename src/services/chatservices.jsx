import axios from '../helpers/axios';
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

	return axios.post('/api/channel/newChannel', channel).then((response) => {
		return response.data;
	});
}

function joinChannel(chatId, userId) {
	const channel = {
		chatId,
		userId,
	};
	return axios.post('/api/channel/joinchannel', channel).then((response) => {
		return response.data;
	});
}
function searchChannel(searchString) {
	const data = {
		searchString,
	};
	return axios.get('/api/channel/search', data).then((response) => {
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
		.post('/api/message', data)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			console.log(err);
		});
}
