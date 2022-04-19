/// <reference types="cypress" />

const dadosLogin = require("../fixtures/dadosLogin.json")
const dadosUsuario = require("../fixtures/dadosUsuario.json")
import Login from "./tarefas/tarefasLogin.js"
import Cliente from "./tarefas/tarefasCliente.js" 
import Produto from "./tarefas/elementosProdutos.js"

describe("Teste de automação SauceDemo", () => {
    it("Realizar login", () => {
       cy.visit ("https://www.saucedemo.com/")
       Login.realizarLogin();
       cy.get("#add-to-cart-sauce-labs-backpack").click();
       cy.get("#shopping_cart_container").click();
       cy.get("#checkout").click();
       Cliente.dadosCliente();
       cy.get("[data-test=continue]").click();
       cy.get("#finish").click();
       cy.logout();
               
                    
    })

    it.skip("Deve pegar valor de um campo e digitar no username", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get("#login_credentials > h4").invoke("text").then((textoInvocado) => {
            Cypress.env("texto", textoInvocado);
        })
        cy.get("[data-test=username]").type("" + Cypress.env("texto"));
        console.log("teste");    

    })

    
      
})