describe("Teste file uploader", () => {
    it("Testes", () => {
       cy.visit ("https://the-internet.herokuapp.com/");
       cy.get (":nth-child(18) > a").click();
       cy.get ("#file-upload").click();
       cy.get ("#file-submit").click();
       cy.get ("h1").should('contain',"Internal Server Error");


     
              
    })
      
})
