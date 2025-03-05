import { checkAndNotifyNewIPOs } from './bot/bot.js';
import { getFormattedTimestamp } from './utils/date&TimeUtils.js';
import { logMessage } from './utils/logger.js';

const startBot = async () => {
	const timestamp = getFormattedTimestamp();
	logMessage(timestamp);
	checkAndNotifyNewIPOs();
};

startBot();
