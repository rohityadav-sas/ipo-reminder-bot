import axios from 'axios';

export const sendTelegramUpdate = async (message: string): Promise<any> => {
	const url: string = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;
	try {
		await axios.post(url, {
			chat_id: process.env.CHANNEL_ID,
			text: message,
			parse_mode: 'HTML'
		});
		console.log('Message sent to Telegram channel successfully.');
	} catch (error) {
		console.error('Error sending message to Telegram:', error);
	}
};

export const reportError = async (message: string) => {
	try {
		await axios.post(
			`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
			{
				chat_id: process.env.ADMIN,
				text: `🚨 ERROR ALERT 🚨\n\n${message}`
			}
		);
	} catch (error) {
		console.error('❌ Failed to send error report:', error);
	}
};
