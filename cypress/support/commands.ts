/// <reference types="cypress" />

import { TpCyGetArgs, TpProduct } from "./custom";

Cypress.Commands.add(
  "getByDataTest",
  (selector: string, args?: TpCyGetArgs) => {
    return cy.get(`[data-test="${selector}"]`, args);
  }
);