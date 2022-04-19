/// <reference types="cypress" />

const dadosEx05 = require("../fixtures/dadosEx05.json")

describe("Teste primeiro dia cypress 05", () => {
    it("form authentication", () => {
       cy.visit ("https://the-internet.herokuapp.com/");
       cy.get (':nth-child(21) > a').click();
       cy.get ('#username').type(dadosEx05.username);
       cy.get ('#password').type(dadosEx05.password);
       cy.get (".fa").click();
       cy.get ('#flash').should('contain', 'You logged into a secure area!');
       cy.get ('.icon-2x').click();
       cy.get ('#flash').should('contain', 'You logged out of the secure area');       
               
              
    })
      
})

/// Exercício 5
/// Em "Form Authentication", faça o login utilizando as credenciais informadas no texto e valide o
/// texto "You logged into a secure area!". Logo após faça o logout e valide o texto "You logged out of
/// the secure area!"
