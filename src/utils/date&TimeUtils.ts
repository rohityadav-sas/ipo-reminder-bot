export const getFormattedTimestamp = (): string => {
	const now = new Date();

	// Format date
	const dateFormatter = new Intl.DateTimeFormat('en-US', {
		weekday: 'long', // Full day name (Wednesday)
		month: 'long', // Full month name (September)
		day: '2-digit', // Day with 2 digits (18)
		year: 'numeric', // Full year (2024)
		timeZone: 'Asia/Kathmandu' // Set to Nepal Time
	});

	// Format time
	const timeFormatter = new Intl.DateTimeFormat('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
		timeZone: 'Asia/Kathmandu'
	});

	// Construct formatted date and time
	const formattedDate = dateFormatter.format(now);
	const formattedTime = timeFormatter.format(now);

	return `[${formattedDate}] [${formattedTime}]`;
};
