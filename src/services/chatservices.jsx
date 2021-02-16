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
	return axios.post('/channel/newchannel', channel).then((response) => {
		return response.data;
	});
}

function joinChannel(chatId, userId) {
	const channel = {
		chatId,
		userId,
	};
	return axios.post('/channel/joinchannel', channel).then((response) => {
		return response.data;
	});
}
function searchChannel(searchString) {
	const data = {
		searchString,
	};
	return axios.get('/channel/search', data).then((response) => {
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
	return axios.post('/message', data).then((response) => {
		return response.data;
	});
}
