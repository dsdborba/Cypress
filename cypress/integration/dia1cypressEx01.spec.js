describe("Teste primeiro dia cypress", () => {
    it("Testes", () => {
       cy.visit ("https://the-internet.herokuapp.com/");
       cy.get ("ul > :nth-child(2) > a").click();
       cy.get ("button").click();
       cy.get ('[onclick="addElement()"]').click();
       cy.get ('[onclick="addElement()"]').click();
       cy.get ('[onclick="addElement()"]').click();
       cy.get ('[onclick="addElement()"]').click();
       cy.get ('[onclick="addElement()"]').click();
       cy.get ('#elements > :nth-child(6)').click();
       cy.get ('#elements > :nth-child(5)').click();
       cy.get ('#elements > :nth-child(4)').click();
       cy.get ('#elements > :nth-child(3)').click();
       cy.get ('#elements > :nth-child(2)').click();
       cy.get ('#elements > :nth-child(1)').click();
               
      
              
    })
      
})

/// Exercício 01
/// Em "Add/Remove Elements" adicionar 6 elementos e excluir esses mesmos 6.