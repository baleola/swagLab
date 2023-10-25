import CartPage from "./cart.page";
import HomePage from "./home.page";
import LoginPage from "./login.page";

class SwagLabsPage {
  loginPage = new LoginPage();
  homePage = new HomePage();
  cartPage = new CartPage();

  goToLoginPage() {
    cy.visit("/");
  }
}

export const swagLabsPage = new SwagLabsPage();
