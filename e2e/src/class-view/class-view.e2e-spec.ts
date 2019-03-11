import { ClassViewPage } from './class-view.po';
import { browser, logging } from 'protractor';

describe('Crossfit Classes', () => {
    let page: ClassViewPage;

    beforeEach(() => {
        page = new ClassViewPage();
        page.navigateTo();
    });

    it('should display headings', () => {
        expect(page.getId()).toBeDefined();
        expect(page.getDate()).toBeDefined();
        expect(page.getDuration()).toBeDefined();
    });

    it('should display athlete list', () => {
        expect(page.getAthletesList()).toBeDefined();
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });

});
