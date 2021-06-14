import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(
      by.css('#login #login-intro .title')
    ).getText() as Promise<string>;
  }
}
