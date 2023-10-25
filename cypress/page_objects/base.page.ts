import { TpProduct } from "cypress/support/custom";

export default class BasePage {
  readonly appLogo = ".app_logo";
  readonly shoppingCartIcon = "#shopping_cart_container";
  readonly inventoryItem = ".inventory_item";
  readonly itemName = ".inventory_item_name";
  readonly itemDesc = ".inventory_item_desc";
  readonly itemPrice = ".inventory_item_price";
  readonly cartBadge = ".shopping_cart_badge";
  readonly cartLink = ".shopping_cart_link";
  readonly cartItems = ".cart_item";

  // M I S C
  addRemoveCartSelector(productName: string) {
    return productName.replace(/ /g, "-").toLowerCase();
  }

  // A C T I O N S
  goToCart() {
    cy.get(this.cartLink).click();
  }

  addToCart(product: TpProduct) {
    const selector = this.addRemoveCartSelector(product.name);
    cy.getByDataTest(`add-to-cart-${selector}`).click();
    cy.getByDataTest(`remove-${selector}`).should("be.visible");
  }

  removeFromCart(product: TpProduct, fromCart = true) {
    const selector = this.addRemoveCartSelector(product.name);
    cy.getByDataTest(`remove-${selector}`).click();
    if (!fromCart)
      cy.getByDataTest(`add-to-cart-${selector}`).should("be.visible");
  }
}
