/// <reference types="cypress" />

describe('Testes alurapic', () => {
    beforeEach(() => {
        cy.visit('alura-fotos.herokuapp.com');
    });
it('verifica mensagem de email invalido', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="email"]').type('Diogo');
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');






    
});




});    