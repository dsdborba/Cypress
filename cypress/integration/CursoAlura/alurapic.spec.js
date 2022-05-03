/// <reference types="cypress" />

describe('Testes alurapic', () => {
    beforeEach(() => {
        cy.visit('alura-fotos.herokuapp.com');
    });
it('Teste de Login', () => {
    cy.get(':nth-child(1) > .form-control').type('flavio');
    cy.get(':nth-child(2) > .form-control').type('123');
    cy.get('.btn').click();
    cy.get('a.mr-1')
      .should('contain', 'flavio');
});























});