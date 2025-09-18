import { login } from "../services/authService.js"
import { fetchIPOs } from "../services/ipoService.js"
import { sendTelegramUpdate, reportError } from "../services/telegramService.js"
import { saveToJSON, readFromJSON, compareIPOs } from "../utils/fileUtils.js"
import { logMessage } from "../utils/logger.js"
import { getResults } from "../services/ipoResultService.js"
import {
	formatIpoMessage,
	formatIPOresultMessage,
} from "../utils/postFormat.js"
import { IPOData } from "../types/ipoTypes.js"

const DATA_FILES = {
	ipos: "data/ipos.json",
	results: "data/ipoResults.json",
}

const getServerDownMessage = (error: unknown): string | null => {
	const errorString = String(error)

	// Check for connection timeout errors
	if (
		errorString.includes("net::ERR_CONNECTION_TIMED_OUT") ||
		errorString.includes("ETIMEDOUT") ||
		errorString.includes("ERR_CONNECTION_REFUSED")
	) {
		// Extract website URL from error message
		const urlMatch = errorString.match(/https?:\/\/([^\/\s]+)/i)
		if (urlMatch) {
			const websiteName = urlMatch[1]
			return `Server down at ${websiteName}`
		}
		return "Server connection failed"
	}
	if (errorString.includes("Timeout")) {
		return "Navigation Timeout Puppeteer"
	}

	return null
}

const logAndSendUpdates = async <T>(
	items: T[],
	formatFn: (item: T) => string,
	type: string
) => {
	if (items.length === 0) {
		logMessage(`No new ${type} found.`)
		return
	}

	logMessage(`Sending Telegram updates for new ${type}...`)
	await Promise.all(
		items.map(async (item) => {
			if (!item) return
			const name =
				typeof item === "object" && "companyName" in item
					? item.companyName
					: item
			logMessage(`New ${type}: ${name}`)
			await sendTelegramUpdate(formatFn(item))
		})
	)
	logMessage(`Telegram updates for ${type} sent successfully.`)
}

const handleIPOFetching = async () => {
	try {
		logMessage("Logging in...")
		const token = await login()
		logMessage("Logged in successfully.")

		logMessage("Fetching IPOs...")
		const IPOs = await fetchIPOs(token)
		logMessage("Fetched IPOs successfully.")

		const existingIPOs: IPOData[] = readFromJSON(DATA_FILES.ipos)
		const newIPOs: IPOData[] = compareIPOs(existingIPOs, IPOs)
		await logAndSendUpdates(newIPOs, formatIpoMessage, "IPO")

		if (newIPOs.length > 0) {
			saveToJSON([...newIPOs, ...existingIPOs], DATA_FILES.ipos)
			logMessage("IPOs saved to JSON files")
		}
	} catch (error) {
		console.error("Error in IPO fetching:", error)

		const serverDownMessage = getServerDownMessage(error)
		if (serverDownMessage) {
			await reportError(`${serverDownMessage}`)
			logMessage(`IPO fetching failed: ${serverDownMessage}`)
		} else {
			await reportError(`IPO fetching error: ${String(error)}`)
		}
	}
}

const handleIPOResults = async () => {
	try {
		logMessage("Checking IPO results...")
		const results: string[] = await getResults()
		logMessage("IPO results fetched successfully.")

		const existingResults: string[] = readFromJSON(DATA_FILES.results)
		const newResults: string[] = compareIPOs(existingResults, results)
		await logAndSendUpdates(newResults, formatIPOresultMessage, "IPO result")

		saveToJSON(results, DATA_FILES.results)
		if (newResults.length > 0) {
			logMessage("IPO results saved to JSON files")
		}
	} catch (error) {
		console.error("Error in IPO results:", error)

		const serverDownMessage = getServerDownMessage(error)
		if (serverDownMessage) {
			await reportError(`${serverDownMessage}`)
			logMessage(`IPO results checking failed: ${serverDownMessage}`)
		} else {
			await reportError(`IPO results error: ${String(error)}`)
		}
	}
}

export const checkAndNotifyNewIPOs = async () => {
	// Run both IPO fetching and IPO results checking concurrently
	await Promise.all([handleIPOFetching(), handleIPOResults()])

	logMessage("Script execution completed.", "END")
}
