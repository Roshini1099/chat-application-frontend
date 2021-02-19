import axios from '../helpers/axios';
import  authHeader  from '../helpers/authheader';
export const chatService = {
	createChannel,
	joinChannel,
	searchChannel,
	Message,
	updateStatus,
	createDirectMessage,
	findEmail
};

//creating new channel
function createChannel(chatName, userId, type)
{
	const channel = {
		chatName,
		userId,
		type,
	};

	return axios.post('/api/channel/newChannel', channel, { headers: authHeader() }).then((response) => {
		return response.data;
	});
}
function findEmail(emailId)
{
	const channel = {
		emailId
	};

	return axios.post('/api/channel/findEmail', channel, { headers: authHeader() }).then((response) => {
		return response.data;
	});
}

function createDirectMessage(receiverEmail, userId, type)
{
	const channel = {
		receiverEmail,
		userId,
		type,
	};

	return axios.post('/api/channel/newChannel', channel, { headers: authHeader() }).then((response) => {
		return response.data;
	});
}

function joinChannel(chatName, userId)
{
	const channel = {
		chatName,
		userId,
	};
	return axios.post('/api/channel/joinchannel', channel, { headers: authHeader() }).then((response) => {
		return response.data;
	});
}
function searchChannel(searchString)
{
	const data = {
		searchString,
	};
	return axios.get('/api/channel/search', data, { headers: authHeader() }).then((response) => {
		return response.data;
	});
}

async function Message(text, senderId, chatId, type, index, senderName)
{
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
		.catch((err) =>
		{
			console.log(err);
		});
}

function updateStatus(chatId, userId, type)
{
	const data = {
		chatId,
		type,
		userId
	};
	return axios.post('/api/updatestatus', data).then((response) =>
	{
		return response.data;
	});
}