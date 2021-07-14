/* eslint-disable no-undef */
/// <reference types="cypress" />

context('Home', () => {

  it('Verify tags in HOME', () => {
    cy.intercept('**/transactions').as('getTrasactions');
    cy.visit('http://localhost:3000');
    cy.wait('@getTrasactions');
    cy.get('.box .value');
    cy.get('.box .description');
    cy.get('.list');
    cy.get('.list-item');
    cy.get('a[href="/new"]').click();
  });
});