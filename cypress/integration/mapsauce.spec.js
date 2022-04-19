/// <reference types="cypress" />

describe('Teste SauceDemo', () => {
    it('Realiza compra com sucesso', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get("[data-test=username]").type("standard_user")
        cy.get("[data-test=password]").type("secret_sauce")
        cy.get("[data-test=login-button]").click()
        cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click()
        cy.get(".shopping_cart_link").click()
        cy.get("[data-test=checkout]").click()
        cy.get("[data-test=firstName]").type("Diogo")
        cy.get("[data-test=lastName]").type("Borba")
        cy.get("[data-test=postalCode]").type("91270650")
        cy.get("[data-test=continue]").click()
        cy.get("[data-test=finish]").click()
        cy.get("[data-test=back-to-products]").click()
        cy.get("#react-burger-menu-btn").click()
        cy.get("#logout_sidebar_link").click()
        
         


















        
    });
    
});






        