import { TpProduct } from "cypress/support/custom";
import BasePage from "./base.page";

export default class CartPage extends BasePage {
  verifyCartItemsCount(count: number): void {
    cy.get(this.cartItems).should("have.length", count);
  }

  verifyItemInCart(product: TpProduct): void {
    cy.contains(this.itemName, product.name).should("be.visible");
    cy.contains(this.itemDesc, product.description).should("be.visible");
    cy.contains(this.itemPrice, product.price).should("be.visible");
  }
}
