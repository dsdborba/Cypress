describe("AutomationDemoSite", () => {
    it("Realizar login", () => {
       cy.visit ("http://demo.automationtesting.in/Register.html")
       cy.get(":nth-child(1) > :nth-child(2) > .form-control").type("Diogo");
       cy.get(":nth-child(1) > :nth-child(3) > .form-control").type("Borba");
       cy.get(".col-md-8 > .form-control").type("Martim Felix Berta 3300");
       cy.get("#eid > .form-control").type("diogo.borba@dbserver.com.br");
       cy.get(":nth-child(4) > .col-md-4 > .form-control").type("51 9999-9999");
       cy.get(":nth-child(1) > .ng-pristine").click();
       cy.get("#checkbox2").click();
       cy.get("#msdd").click();
       cy.get(":nth-child(29) > .ui-corner-all").click();
       cy.get("#section > .container > .row").click();
       cy.get("#Skills").select("CSS");
       cy.get("#countries").select("Brazil");
       cy.get(".select2-selection").click();
       cy.get("#select2-country-results > :nth-child(2)").click();
       cy.get("#yearbox").select("1981");
       cy.get(":nth-child(11) > :nth-child(3) > .form-control").select("February");
       cy.get("#daybox").select("19");
       cy.get("#firstpassword").type("123456");
       cy.get("#secondpassword").type("123456");
       cy.get("#submitbtn").click();









       



       
       
      
        
        
    })
      
})