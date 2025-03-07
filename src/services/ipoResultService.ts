import puppeteer from 'puppeteer';

export const getResults = async (): Promise<string[]> => {
	const browser = await puppeteer.launch({
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});

	const page = await browser.newPage();
	await page.setUserAgent(
		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36'
	);
	await page.goto('https://iporesult.cdsc.com.np/');
	await page.waitForSelector('.ng-arrow');
	await page.click('.ng-arrow');
	await page.waitForSelector('.ng-option-label');
	const elements: string[] = await page.$$eval(
		'.ng-option-label',
		(elements: Element[]) =>
			elements.slice(0, 5).map((element: Element) => element.textContent || '')
	);
	await browser.close();
	return elements;
};
