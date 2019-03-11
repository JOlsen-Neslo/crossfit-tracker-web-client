import { browser, by, element } from 'protractor';

export class ClassViewPage {

    navigateTo() {
        return browser.get(browser.baseUrl + '/coach/classes/1') as Promise<any>;
    }

    getId() {
        return element.all(by.css('app-class-view h1')).first().getText() as Promise<string>;
    }

    getDate() {
        return element.all(by.css('app-class-view h1')).get(1).getText() as Promise<string>;
    }

    getDuration() {
        return element.all(by.css('app-class-view h1')).last().getText() as Promise<string>;
    }

    getAthletesList() {
        return element(by.css('app-class-view dl'));
    }

}
