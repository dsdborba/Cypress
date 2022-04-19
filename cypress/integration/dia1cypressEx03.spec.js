describe("Teste primeiro dia cypress 03", () => {
    it("Testes", () => {
       cy.visit ("https://the-internet.herokuapp.com/");
       cy.get (':nth-child(11) > a').click();
       cy.get ('#dropdown').select("Option 2");
       
             
      
              
    })
      
})

/// Exercício 03
/// Em "dropdown" escolher a "Opção 2"