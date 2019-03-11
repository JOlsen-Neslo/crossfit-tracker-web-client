import { browser, by, element } from 'protractor';

export class NavbarPage {

    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getTitle() {
        return element(by.css('.navbar > a')).getText() as Promise<string>;
    }

}
