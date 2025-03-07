import { login } from '../services/authService.js';
import { fetchIPOs } from '../services/ipoService.js';
import {
	sendTelegramUpdate,
	reportError
} from '../services/telegramService.js';
import { saveToJSON, readFromJSON, compareIPOs } from '../utils/fileUtils.js';
import { logMessage } from '../utils/logger.js';
import { getResults } from '../services/ipoResultService.js';
import {
	formatIpoMessage,
	formatIPOresultMessage
} from '../utils/postFormat.js';
import { IPOData } from '../types/ipoTypes.js';

const DATA_FILES = {
	ipos: 'data/ipos.json',
	results: 'data/ipoResults.json'
};

const logAndSendUpdates = async <T>(
	items: T[],
	formatFn: (item: T) => string,
	type: string
) => {
	if (items.length === 0) {
		logMessage(`No new ${type} found.`);
		return;
	}

	logMessage(`Sending Telegram updates for new ${type}...`);
	await Promise.all(
		items.map(async (item) => {
			if (!item) return;
			const name =
				typeof item === 'object' && 'companyName' in item
					? item.companyName
					: item;
			logMessage(`New ${type}: ${name}`);
			await sendTelegramUpdate(formatFn(item));
		})
	);
	logMessage(`Telegram updates for ${type} sent successfully.`);
};

export const checkAndNotifyNewIPOs = async () => {
	try {
		logMessage('Logging in...');
		const token = await login();
		logMessage('Logged in successfully.');

		logMessage('Fetching IPOs...');
		const IPOs = await fetchIPOs(token);
		logMessage('Fetched IPOs successfully.');

		const existingIPOs: IPOData[] = readFromJSON(DATA_FILES.ipos);
		const newIPOs: IPOData[] = compareIPOs(existingIPOs, IPOs);
		await logAndSendUpdates(newIPOs, formatIpoMessage, 'IPO');

		logMessage('Checking IPO results...');
		const results: string[] = await getResults();
		logMessage('IPO results fetched successfully.');

		const existingResults: string[] = readFromJSON(DATA_FILES.results);
		const newResults: string[] = compareIPOs(existingResults, results);
		await logAndSendUpdates(newResults, formatIPOresultMessage, 'IPO result');

		saveToJSON([...newIPOs, ...existingIPOs], DATA_FILES.ipos);
		saveToJSON(results, DATA_FILES.results);
		logMessage('Data saved to JSON files', 'END');
	} catch (error) {
		console.error('Error in execution:', error);
		await reportError(String(error));
		logMessage('Error occurred, reported to admin.', 'END');
	}
};
