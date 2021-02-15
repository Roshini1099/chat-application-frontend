import axios from '../helpers/axios';
export const chatService = {
	createChannel,
	addChannelMembers,
};

//creating new channel
function createChannel(channelName, userId) {
	const channel = {
		channelName,
		userId,
	};
	return axios.post('/channel/newchannel', channel).then((response) => {
		return response.data;
	});
}

function addChannelMembers(channelId, userId) {
	const channel = {
		channelId,
		userId,
	};
	return axios.post('/channel/join', channel).then((response) => {
		return response.data;
	});
}
