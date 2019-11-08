const {Given, When, Then} = require('cucumber');
const expect = require('expect-puppeteer');

const scope = require('../support/scope');
const { visitHome } = require('../support/actions');
const assert = require('assert');

When('Eu acesso a página inicial da aplicação', visitHome);
Given('Estou na página inicial da minha aplicação', visitHome);

Then('Devo ver a mensagem {string}', async (message) => {
    const result = await scope.context.currentPage.$eval('body', element => element.innerText);
    assert.equal(result, message);
});

When('Eu clico no link {string}', async(link_text) => {
    return expect(scope.context.currentPage).toClick('a', {text: link_text});
});

Then("Devo ser redirecionado para a página {string}", async(page_name) => {

    await scope.context.currentPage.waitForNavigation();

    assert.equal(scope.map_of_pages[page_name], scope.context.currentPage.url());
});


Given('Estou na página {string}', async(page_name) => {
    let headless = false;
    let slowMo = 1;

    scope.browser = await scope.driver.launch({headless, slowMo, args: ['--no-sandbox']});
    scope.context.currentPage = await scope.browser.newPage();
    scope.context.currentPage.setViewport({ width: 1280, height: 1024});

    const urlToVisit = scope.map_of_pages[page_name];

    const visit = await scope.context.currentPage.goto(urlToVisit, {
        waitUntil: 'networkidle2'
    });

    return visit;
});

When('Eu crio um tópico com o título {string}', async (titulo) => {
    await expect(scope.context.currentPage).toFill('input[id="titulo"]', titulo);
});

When('Com a mensagem {string}', async (mensagem) => {
    await expect(scope.context.currentPage).toFill('input[id="mensagem"]', mensagem );
});

Then('Um tópico com o título {string} deve ter sido criado', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('Eu clico em {string}', async (button_text) => {
    await expect(scope.context.currentPage).toClick('button', { text: button_text });
});
