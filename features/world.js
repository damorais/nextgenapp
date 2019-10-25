const { setWorldConstructor } = require('cucumber');
const puppeteer = require('puppeteer');
const scope = require('./support/scope');


const World = function(){
    scope.driver = puppeteer;
    scope.context = {};
    scope.host = "http://localhost:3000";

    scope.map_of_pages = {
        'Novo Tópico': scope.host + '/usuarios'
    }
};

setWorldConstructor(World);