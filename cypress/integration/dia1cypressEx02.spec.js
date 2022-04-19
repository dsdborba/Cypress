describe("Teste primeiro dia cypress 02", () => {
    it("Testes", () => {
       cy.visit ("https://the-internet.herokuapp.com/");
       cy.get (':nth-child(6) > a').click();
       cy.get ('#checkboxes > :nth-child(3)').click();
       cy.get ('#checkboxes > :nth-child(1)').click();
             
      
              
    })
      
})

/// Exercício 02
/// Em "Checkboxes" desmarcar o "checkbox 2" e marcar "checkbox 1"