describe("Teste primeiro dia cypress 04", () => {
    it("inputs", () => {
       cy.visit ("https://the-internet.herokuapp.com/");
       cy.get (':nth-child(27) > a').click();
       cy.get ('input').type("12345");

       
               
      
              
    })
      
})

/// Exercício 04
/// Em "inputs" digitar um número aleatório