import axios from 'axios';
import https from 'https';
import { endpoints } from '../config/config.js';

export const login = async (): Promise<string> => {
	try {
		const { headers } = await axios.post(endpoints.login, {
			username: process.env.USER,
			password: process.env.PASSWORD,
			clientId: process.env.CLIENT_ID
		}, { httpsAgent: new https.Agent({ rejectUnauthorized: false }) });
		return headers.authorization;
	} catch (error) {
		console.error('Login failed:', error);
		throw error;
	}
};
