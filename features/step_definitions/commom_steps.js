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

    assert.equal(scope.context.currentPage.url(), scope.map_of_pages[page_name]);
});
