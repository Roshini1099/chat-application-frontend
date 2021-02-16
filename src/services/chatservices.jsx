import axios from '../helpers/axios';
export const chatService = {
	createChannel,
	joinChannel,
	searchChannel,
	Message,
};

//creating new channel
function createChannel(chatName, userId, type, receiverId) {
	const channel = {
		chatName,
		userId,
		type,
		receiverId,
	};
	return axios.post('/api/channel/newchannel', channel).then((response) => {
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

function Message(text, senderId, chatName, type, index) {
	const data = {
		text,
		senderId,
		chatName,
		type,
		index,
	};
	return axios.post('/api/message', data).then((response) => {
		return response.data;
	});
}
