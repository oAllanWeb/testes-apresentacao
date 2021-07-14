/* eslint-disable no-undef */
/// <reference types="cypress" />

context('Add Transection', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/new');
  });

  it('Focus and leave inputs not value show error', () => {
    cy.get('#name input').focus().blur();
    cy.get('#name .error').should('have.text', 'Preencha o nome');
    cy.get('#cpf input').focus().blur();
    cy.get('#cpf .error').should('have.text', 'Preencha o CPF');
    cy.get('#card-number input').focus().blur();
    cy.get('#card-number .error').should('have.text', 'Preencha o N° do cartão');
    cy.get('#expiration-date input').focus().blur();
    cy.get('#expiration-date .error').should('have.text', 'Preencha a Data de expiração');
    cy.get('#cvv input').focus().blur();
    cy.get('#cvv .error').should('have.text', 'Preencha o CVV');
    cy.get('#amount input').focus().blur();
    cy.get('#amount .error').should('have.text', 'Valor da transação Inválido');
  });


  it('Fill out form and send transaction success', () => {
    cy.get('#name input').type('Allan ');
    cy.get('#cpf input').type('16846690735');
    cy.get('#card-number input').type('1234567890123456');
    cy.get('#expiration-date input').type('122200');
    cy.get('#cvv input').type('200');
    cy.get('#amount input').type(20000);
    cy.intercept('POST','**/transactions').as('setTrasactions');
    cy.get('button[type="submit"]').click();
    cy.wait('@setTrasactions');
    cy.get('.react-toast-notifications__toast--success');
  });
  
  it('Fill out form and send transaction error', () => {
    cy.get('#name input').type('Allan ');
    cy.get('#cpf input').type('16846690735');
    cy.get('#card-number input').type('1234567890123456');
    cy.get('#expiration-date input').type('122200');
    cy.get('#cvv input').type('200');
    cy.get('#amount input').type(20000);
    cy.get('button[type="submit"]').click();
    cy.intercept('POST','**/transactions', {statusCode:404}).as('setTrasactions');
    cy.get('button[type="submit"]').click();
    cy.wait('@setTrasactions');
    cy.get('.react-toast-notifications__toast--error');
  });

});

