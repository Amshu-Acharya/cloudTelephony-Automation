class LoginPage {
  // Locators for the login page
  getUsernameField() {
    return cy.get('input[name="username"]');
  }

  getPasswordField() {
    return cy.get('input[name="password"]');
  }

  getLoginButton() {
    return cy.get('button[name="login_button"]'); 
  }

  // Actions for the login page
  login(username, password) {
    this.getUsernameField().type(username);
    this.getPasswordField().type(password);
    this.getLoginButton().click();
  }
}

export default LoginPage;
