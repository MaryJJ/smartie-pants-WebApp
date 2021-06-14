import { LoginPage } from './login.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Full Stack Developer Assignment');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
