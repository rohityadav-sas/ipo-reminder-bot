import { checkAndNotifyNewIPOs } from "./bot/bot.js"
import { getFormattedTimestamp } from "./utils/date&TimeUtils.js"
import { logMessage } from "./utils/logger.js"

const startBot = async () => {
	let timeout = setTimeout(() => {
		process.exit(0)
	}, 90 * 1000)
	const timestamp = getFormattedTimestamp()
	logMessage(timestamp)
	checkAndNotifyNewIPOs().then(() => {
		clearTimeout(timeout)
		process.exit(0)
	})
}

startBot()
