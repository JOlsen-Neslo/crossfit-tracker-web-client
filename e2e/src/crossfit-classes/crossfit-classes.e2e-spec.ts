import { CrossfitClassesPage } from './crossfit-classes.po';
import { browser, logging } from 'protractor';

describe('Crossfit Classes', () => {
    let page: CrossfitClassesPage;

    beforeEach(() => {
        page = new CrossfitClassesPage();
        page.navigateTo();
    });

    it('should display heading', () => {
        expect(page.getHeading()).toEqual('Welcome coach, Jordan!');
    });

    it('should display class list', () => {
        expect(page.getClassList()).toBeDefined();
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });

});
