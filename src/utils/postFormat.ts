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
		`━━━━━━━━━━━━━━━━━━━━━━\n` +
		`📢 *New ${ipo.shareTypeName} Alert!*\n` +
		`━━━━━━━━━━━━━━━━━━━━━━\n\n` +
		`🏢 *Company:* \`${ipo.companyName}\`\n\n` +
		`📌 *Share Type:* \`${ipo.shareTypeName}\`\n` +
		`📊 *Share Group:* \`${ipo.shareGroupName}\`\n` +
		`📁 *Sub Group:* \`${ipo.subGroup}\`\n\n` +
		`📅 *Issue Open:* \`${ipo.issueOpenDate}\`\n` +
		`⏳ *Issue Close:* \`${ipo.issueCloseDate}\`\n\n` +
		`━━━━━━━━━━━━━━━━━━━━━━\n` +
		`🚀 Stay updated with the latest IPOs! 🚀`
	);
}
