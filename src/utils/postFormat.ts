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
		`📢 *New ${ipo.shareTypeName} Alert!*\n` +
		`━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
		`🏢 *Company:* _${ipo.companyName}_\n\n` +
		`📌 *Share Type:* _${ipo.shareTypeName}_\n` +
		`📊 *Share Group:* _${ipo.shareGroupName}_\n` +
		`📁 *Sub Group:* _${ipo.subGroup}_\n\n` +
		`📅 *Issue Open:* _${ipo.issueOpenDate}_\n` +
		`⏳ *Issue Close:* _${ipo.issueCloseDate}_\n\n` +
		`━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
		`🚀 Stay updated with the latest IPOs! 🚀`
	);
}
