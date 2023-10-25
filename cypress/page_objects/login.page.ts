import BasePage from "./base.page";

export default class LoginPage extends BasePage {
  readonly usernameID = "username";
  readonly passwordID = "password";
  readonly loginButtonID = "login-button";

  login(username: string, password: string) {
    cy.getByDataTest(this.usernameID).type(username);
    cy.getByDataTest(this.passwordID).type(password);
    cy.getByDataTest(this.loginButtonID).click();
  }
}
