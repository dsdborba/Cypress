describe("Teste de automação SauceDemo", () => {
    it("Realizar login", () => {
       cy.visit ("https://www.saucedemo.com/")
       cy.get ("[data-test=username]").type("standard_user");
       cy.get ("[data-test=password]").type("secret_sauce");
       cy.get (".btn_action").click();
       cy.get (":nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price").click();
       cy.get (":nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price").should('contain', '29.99');
               
                    
    })

})    