import fs from "fs"
import path from "path"

export const saveToJSON = (data: any, filePath: string): void => {
	try {
		const fullPath = path.resolve(filePath)
		fs.writeFileSync(fullPath, JSON.stringify(data, null, 2))
	} catch (error) {
		console.error("Error saving data:", error)
		throw error
	}
}

export const readFromJSON = (filePath: string): any => {
	try {
		const fullPath = path.resolve(filePath)
		const data = fs.readFileSync(fullPath, "utf-8")
		console.log(JSON.parse(data))
		return JSON.parse(data)
	} catch (error) {
		console.error("Error reading data:", error)
		return null
	}
}

export const compareIPOs = (oldIPOs: any[], newIPOs: any[]): any[] => {
	const oldIPOSet = new Set(oldIPOs.map((ipo) => JSON.stringify(ipo)))
	const uniqueIPOs = newIPOs.filter(
		(ipo) => !oldIPOSet.has(JSON.stringify(ipo))
	)
	return uniqueIPOs
}
