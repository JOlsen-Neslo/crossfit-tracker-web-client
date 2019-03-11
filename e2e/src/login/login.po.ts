import { browser, by, element } from 'protractor';

export class LoginPage {

    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getHeading() {
        return element(by.css('app-login h2')).getText() as Promise<string>;
    }

    getField(id: string) {
        return element(by.id(id));
    }

}
