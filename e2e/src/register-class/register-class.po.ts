import { browser, by, element, ElementFinder } from 'protractor';

export class RegisterClassPage {

    navigateTo() {
        return browser.get(browser.baseUrl + '/coach/classes/new') as Promise<any>;
    }

    getHeading() {
        return element(by.css('app-register-class h1')).getText() as Promise<string>;
    }

    getField(id: string) {
        return element(by.id(id));
    }

    getButton(id: string) {
        return element(by.css(`.btn-group .btn-${id}`));
    }

    enterText(field: ElementFinder, text: string) {
        field.sendKeys(text);
    }

    addAthlete() {
        this.enterText(this.getField('name'), 'Test');
        this.getButton('secondary').click();
    }

    getAthletes() {
        return element(by.css('.form-group dl'));
    }

}
