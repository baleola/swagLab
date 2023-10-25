import { SortOptions } from "cypress/support/custom";
import BasePage from "./base.page";
import { SortingOrder, isSorted, mapSortOptionToValue } from "utils/sort";

export default class HomePage extends BasePage {
  productSortSelectInput = "product_sort_container";
  verifyLoggedIn() {
    cy.contains(this.appLogo, "Swag Labs").should("be.visible");
    cy.get(this.shoppingCartIcon).should("be.visible");
  }

  verifyDefaultItems() {
    cy.get(this.inventoryItem).should("have.length", 6);
  }

  sortProducts(option: SortOptions) {
    const value = mapSortOptionToValue(option);
    cy.getByDataTest(this.productSortSelectInput).select(value);
    cy.getByDataTest(this.productSortSelectInput).should("have.value", value);
  }

  validateSort(option: SortOptions): void {
    const items = [];
    const selector =
      option === "NameAtoZ" || option === "NameZtoA"
        ? this.itemName
        : this.itemPrice;

    cy.get(selector)
      .each(($items) => {
        items.push($items.text());
      })
      .then(() => {
        switch (option) {
          case "PriceHighLow":
          case "NameZtoA":
            expect(isSorted(items, SortingOrder.Descending)).to.be.true;
            break;
          case "PriceLowHigh":
          case "NameAtoZ":
            expect(isSorted(items, SortingOrder.Ascending)).to.be.true;
            break;
          default:
        }
      });
  }
}
