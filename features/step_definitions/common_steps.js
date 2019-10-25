const { Given, When, Then } = require('cucumber');
const scope = require('../support/scope');
const assert = require('assert');
const expect = require('expect-puppeteer');
const { visitHomePage } = require('../support/actions');

// let headless = false;
// let slowMo = 10;


// const visitHomePage = async () => {
// 	if (!scope.browser)
// 		scope.browser = await scope.driver.launch({ headless, slowMo, args: ['--no-sandbox'] });
// 	scope.context.currentPage = await scope.browser.newPage();
// 	scope.context.currentPage.setViewport({ width: 1280, height: 1024 });
// 	const url = scope.host;
// 	const visit = await scope.context.currentPage.goto(url, {
// 		waitUntil: 'networkidle2'
// 	});
// 	return visit;
// };


// const takeScreenshot = async url => {
    
//     //await scope.context.currentPage.screenshot({path: 'pagina.png'});
    
    
//     console.log(await scope.context.currentPage.$eval('body', el => el.innerText));

//     return "";
// };

When('Eu acesso a página inicial', visitHomePage);

Then('Devo ver a mensagem {string}', async message => {
    await expect(scope.context.currentPage).toMatch("message");
});

