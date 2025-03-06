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
		`🏢 *Company:* ___${ipo.companyName}___\n\n` +
		`📌 *Share Type:* ___${ipo.shareTypeName}___\n` +
		`📊 *Share Group:* ___${ipo.shareGroupName}___\n` +
		`📁 *Sub Group:* ___${ipo.subGroup}___\n\n` +
		`📅 *Issue Open:* ___${ipo.issueOpenDate}___\n` +
		`⏳ *Issue Close:* ___${ipo.issueCloseDate}_\n\n` +
		`━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
		`🚀 Stay updated with the latest IPOs! 🚀`
	);
}
