// Dependencies
const assert = require('assert');
// const { validUsers, validUser } = require('api/test/data/userData.test');
// const { interactsWithMail } = require('api/test/helpers/emailStub');
// const pages = require('./pages');
// const selectors = require('./selectors');
const scope = require('./scope');

// Defines whether puppeteer runs Chrome in headless mode.
let headless = true;
let slowMo = 5;
// Chrome is set to run headlessly and with no slowdown in CircleCI
// if (process.env.CIRCLECI) headless = true;
// if (process.env.CIRCLECI) slowMo = 0;

const visitHomePage = async () => {
	if (!scope.browser)
		scope.browser = await scope.driver.launch({ headless, slowMo, args: ['--no-sandbox'] });
	scope.context.currentPage = await scope.browser.newPage();
	scope.context.currentPage.setViewport({ width: 1280, height: 1024 });
	const url = scope.host;
	const visit = await scope.context.currentPage.goto(url, {
		waitUntil: 'networkidle2'
	});
	return visit;
};

module.exports = { visitHomePage };