import { browser, by, element } from 'protractor';

export class AppPage {

    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getNavbar() {
        return element(by.css('app-root app-navbar')).getText() as Promise<string>;
    }

    getOutlet() {
        return element(by.css('app-root router-outlet')).getText() as Promise<string>;
    }

}
