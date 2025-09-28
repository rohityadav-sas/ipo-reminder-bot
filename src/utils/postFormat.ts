export function formatIpoMessage(ipo: IPOData): string {
	return (
		`📢 <b>New ${ipo.shareTypeName} Announcement!</b> 📢\n` +
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
	)
}

export function formatIPOresultMessage(result: string): string {
	return (
		`🎉  <b>IPO Result Announcement!</b>  🎉\n` +
		`<b>━━━━━━━━━━━━━━━━━━━━━━━</b>\n\n` +
		`🏢  <b>Company:</b> <i>${result}</i>\n\n` +
		`🔗  <b>Check Result:</b> <a href="https://iporesult.cdsc.com.np/">IPO result</a>\n\n` +
		`<b>━━━━━━━━━━━━━━━━━━━━━━━</b>\n` +
		`📅 Stay tuned for more updates! 🚀` +
		`<b>━━━━━━━━━━━━━━━━━━━━━━━</b>`
	)
}
