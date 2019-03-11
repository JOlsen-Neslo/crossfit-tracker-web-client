import { RegisterClassPage } from './register-class.po';
import { browser, logging } from 'protractor';

describe('Register Class', () => {
    let page: RegisterClassPage;

    beforeEach(() => {
        page = new RegisterClassPage();
        page.navigateTo();
    });

    it('should display Register heading', () => {
        expect(page.getHeading()).toEqual('Register New Class');
    });

    it('should display fields and buttons', () => {
        expect(page.getField('date')).toBeDefined();
        expect(page.getField('duration')).toBeDefined();
        expect(page.getField('name')).toBeDefined();
        expect(page.getField('member')).toBeDefined();

        expect(page.getButton('primary')).toBeDefined();
        expect(page.getButton('secondary')).toBeDefined();
    });

    it('should display athlete list after adding one', () => {
        page.addAthlete();
        expect(page.getAthletes()).toBeDefined();
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });

});
