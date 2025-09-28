import axios from "axios"
import https from "https"
import { endpoints } from "../config/config.js"

export const fetchIPOs = async (token: string): Promise<IPOData[]> => {
	try {
		const payload: ipoRequestPayload = {
			filterFieldParams: [
				{ key: "companyIssue.companyISIN.script", alias: "Scrip" },
				{ key: "companyIssue.companyISIN.company.name", alias: "Company Name" },
				{
					key: "companyIssue.assignedToClient.name",
					alias: "Issue Manager",
					value: "",
				},
			],
			page: 1,
			size: 10,
			searchRoleViewConstants: "VIEW_APPLICABLE_SHARE",
			filterDateParams: [
				{ key: "minIssueOpenDate", condition: "", alias: "", value: "" },
				{ key: "maxIssueCloseDate", condition: "", alias: "", value: "" },
			],
		}

		const { data } = await axios.post(endpoints.IPO, payload, {
			headers: { Authorization: token },
			httpsAgent: new https.Agent({ rejectUnauthorized: false }),
		})

		if (!data || !data.object || !Array.isArray(data.object)) {
			throw new Error("Unexpected API response format")
		}

		return data.object.map(
			(ipo: any): IPOData => ({
				subGroup: ipo.subGroup,
				companyName: ipo.companyName,
				shareTypeName: ipo.shareTypeName,
				shareGroupName: ipo.shareGroupName,
				issueOpenDate: ipo.issueOpenDate,
				issueCloseDate: ipo.issueCloseDate,
			})
		)
	} catch (error) {
		console.error("Fetching IPO list failed:", error)
		throw error
	}
}
