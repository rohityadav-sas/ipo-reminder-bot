/**
 * Formats IPO details into a structured Telegram message.
 * @param {Object} ipo - The IPO object containing details.
 * @param {string} ipo.companyName - Name of the company.
 * @param {string} ipo.shareTypeName - Type of share.
 * @param {string} ipo.shareGroupName - Share group.
 * @param {string} ipo.subGroup - Sub-group.
 * @param {string} ipo.issueOpenDate - IPO opening date.
 * @param {string} ipo.issueCloseDate - IPO closing date.
 * @returns {string} - The formatted IPO message.
 */
export function formatIpoMessage(ipo: any): string {
	return (
		`📢 *New IPO Alert!*\n\n` +
		`🏢 *Company:* ${ipo.companyName}\n` +
		`📌 *Share Type:* ${ipo.shareTypeName}\n` +
		`📊 *Share Group:* ${ipo.shareGroupName}\n` +
		`📁 *Sub Group:* ${ipo.subGroup}\n` +
		`📅 *Issue Open:* ${ipo.issueOpenDate}\n` +
		`⏳ *Issue Close:* ${ipo.issueCloseDate}\n\n` +
		`🔔 Stay tuned for updates!`
	);
}
