import { login } from '../services/authService.js';
import { fetchIPOs } from '../services/ipoService.js';
import { sendTelegramUpdate } from '../services/telegramService.js';
import { saveToJSON, readFromJSON, compareIPOs } from '../utils/fileUtils.js';
import { reportError } from '../services/telegramService.js';
import { logMessage } from '../utils/logger.js';

import { formatIpoMessage } from '../utils/postFormat.js';

export const checkAndNotifyNewIPOs = async () => {
	try {
		logMessage('Logging in...');
		const token = await login();
		logMessage('Logged in successfully.');
		logMessage('Fetching IPOs...');
		const IPOs = await fetchIPOs(token);
		logMessage('Fetched IPOs successfully.');
		const existingIPOs = readFromJSON('data/ipos.json');
		const newIPOs = compareIPOs(existingIPOs, IPOs);

		if (newIPOs.length > 0) {
			logMessage('Sending Telegram update...');
			newIPOs.forEach(async (ipo) => {
				logMessage(`New IPO found: ${ipo.companyName}`);
				const message = formatIpoMessage(ipo);
				await sendTelegramUpdate(message);
			});
			logMessage('Telegram update sent successfully.');
			const allIPOs = [...existingIPOs, ...IPOs];
			saveToJSON(allIPOs, 'data/ipos.json');
			logMessage('IPOs saved to file.', 'END');
		} else {
			logMessage('No new IPOs found.', 'END');
		}
	} catch (error) {
		console.error('Error in execution:', error);
		await reportError(String(error));
		logMessage('Error occured, reported to admin.', 'END');
	}
};
