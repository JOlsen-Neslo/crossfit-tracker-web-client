import { browser, by, element } from 'protractor';

export class CrossfitClassesPage {

    navigateTo() {
        return browser.get(browser.baseUrl + '/coach/classes') as Promise<any>;
    }

    getHeading() {
        return element(by.css('app-crossfit-classes h1')).getText() as Promise<string>;
    }

    getClassList() {
        return element(by.css('app-crossfit-classes dl'));
    }

}
