import fs from 'fs';
import path from 'path';

const LOG_FILE_PATH = path.resolve('logs/bot.log');

export const logMessage = (
	message: string,
	level: 'START' | 'END' = 'START'
) => {
	let logEntry = `${message}\n`;
	if (level === 'END') {
		logEntry +=
			'\n-----------------------------------------------------------------------------------------------------------------------\n\n';
	}
	console.log(logEntry);
	// fs.appendFileSync(LOG_FILE_PATH, logEntry, { encoding: 'utf-8' });
};
