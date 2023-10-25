export type TpProduct = {
  name: string;
  description: string;
  price: string;
};

export type SortOptions =
  | "PriceHighLow"
  | "PriceLowHigh"
  | "NameAtoZ"
  | "NameZtoA";
export type SortValues = "hilo" | "lohi" | "az" | "za";

export type TpCyGetArgs = Partial<
  Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow
>;

declare global {
  namespace Cypress {
    interface Chainable {
      getByDataTest(selector: string, args?: TpCyGetArgs): Chainable;
    }
  }
}
