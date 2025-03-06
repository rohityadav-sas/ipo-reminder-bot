import { IPOData } from '../types/ipoTypes.js';

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
export function formatIpoMessage(ipo: IPOData): string {
	return (
		`📢 <b>New ${ipo.shareTypeName} Alert!</b>\n` +
		`<b>━━━━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
		`🏢 <b>Company:</b> <i>${ipo.companyName}</i>\n\n` +
		`📌 <b>Share Type:</b> <i>${ipo.shareTypeName}</i>\n\n` +
		`📊 <b>Share Group:</b> <i>${ipo.shareGroupName}</i>\n\n` +
		`📁 <b>Sub Group:</b> <i>${ipo.subGroup}</i>\n\n` +
		`📅 <b>Issue Open:</b> <i>${ipo.issueOpenDate}</i>\n\n` +
		`⏳ <b>Issue Close:</b> <i>${ipo.issueCloseDate}</i>\n\n` +
		`<b>━━━━━━━━━━━━━━━━━━━━━━━</b>\n` +
		`🔥 <b>Don't miss out! Stay updated! 🚀</b>` +
		`<b>━━━━━━━━━━━━━━━━━━━━━━━</b>\n`
	);
}
