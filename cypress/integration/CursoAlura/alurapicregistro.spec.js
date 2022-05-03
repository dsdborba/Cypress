/// <reference types="cypress" />

describe('Testes alurapic', () => {
    beforeEach(() => {
        cy.visit('alura-fotos.herokuapp.com');
    });
it('verifica mensagem de validacao', () => {

    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');



});




});