import { NavbarPage } from './navbar.po';
import { browser, logging } from 'protractor';

describe('Navbar', () => {
    let page: NavbarPage;

    beforeEach(() => {
        page = new NavbarPage();
        page.navigateTo();
    });

    it('should display Crossfit Tracker title', () => {
        expect(page.getTitle()).toEqual('Crossfit Tracker');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });

});
