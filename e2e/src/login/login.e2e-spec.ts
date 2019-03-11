import { LoginPage } from './login.po';
import { browser, logging } from 'protractor';

describe('Login', () => {
    let page: LoginPage;

    beforeEach(() => {
        page = new LoginPage();
        page.navigateTo();
    });

    it('should display heading', () => {
        expect(page.getHeading()).toEqual('Coach Login');
    });

    it('should display fields', () => {
        expect(page.getField('name')).toBeDefined();
        expect(page.getField('password')).toBeDefined();
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });

});
