import axios from "axios"
import { endpoints } from "../config/config.js"
import "dotenv/config"

export const login = async (): Promise<string> => {
	try {
		const { headers } = await axios.post(endpoints.login, {
			username: process.env.USER,
			password: process.env.PASSWORD,
			clientId: process.env.CLIENT_ID,
		})
		return headers.authorization
	} catch (error) {
		console.error("Login failed:", error)
		throw error
	}
}
