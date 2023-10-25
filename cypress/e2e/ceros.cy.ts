import { swagLabsPage } from "cypress/page_objects/swagLabs.page";
import { TpProduct } from "cypress/support/custom";

describe("Ceros Automation Challeng - SwagLabs", () => {
  const username = Cypress.env("STANDARD_USER_NAME");
  const password = Cypress.env("USER_PW");

  const { homePage, loginPage, cartPage } = swagLabsPage;

  let singleProduct: TpProduct;

  before(() => {
    cy.fixture("products").then((fixture) => {
      const products: TpProduct[] = fixture.products;
      singleProduct = products[0];
    });
  });

  beforeEach(() => {
    swagLabsPage.goToLoginPage();
    swagLabsPage.loginPage.login(username, password);
  });

  it("Verify the standard user can log in", () => {
    swagLabsPage.homePage.verifyLoggedIn();
  });

  it("Verify that, by default, the inventory page lists 6 items", () => {
    swagLabsPage.homePage.verifyDefaultItems();
  });

  it("Verify you can add an item to the card and that it is visible on the cart page", () => {
    homePage.addToCart(singleProduct);
    homePage.goToCart();
    cartPage.verifyCartItemsCount(1);
    cartPage.verifyItemInCart(singleProduct);
  });

  it("Verify you can sort the inventory items by price, high-to-low, and the sorting is correct.", () => {
    homePage.sortProducts("PriceHighLow");
    homePage.validateSort("PriceHighLow");
  });

  it("Verify you can sort the inventory items by price, low-to-high, and the sorting is correct.", () => {
    homePage.sortProducts("PriceLowHigh");
    homePage.validateSort("PriceLowHigh");
  });

  it("Verify you can sort the inventory items by name, A-to-z and the sorting is correct.", () => {
    homePage.sortProducts("NameAtoZ");
    homePage.validateSort("NameAtoZ");
  });

  it("Verify you can sort the inventory items by name, Z-to-A, and the sorting is correct.", () => {
    homePage.sortProducts("NameZtoA");
    homePage.validateSort("NameZtoA");
  });
});
