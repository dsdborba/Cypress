/// <reference types="cypress" />

import '../../support/gui_commands'



describe('Testes alurapic', () => {
    beforeEach(() => {
        cy.visit('alura-fotos.herokuapp.com');
    });
it('Teste de Login', () => {
  
     cy.login('flavio', '123')
     cy.contains('flavio').should('be.visible');
     

});























});