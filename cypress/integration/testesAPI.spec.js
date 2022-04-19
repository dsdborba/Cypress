/// <reference types="cypress" />

//const cep ="91270650";
//const typeRequest ="json"

describe("Testes de API", () => {
    it("POST no viaCep", () => {
        cy.request({
            method: "POST",
            url: "https://api-de-tarefas.herokuapp.com/contacts",
            body: {
                
                    "name": "Testes",
                    "last_name": "API",
                    "email": "1testesdeapi007@gmail.com",
                    "age": "28",
                    "phone": "21984759575",
                    "address": "Rua Arapongas",
                    "state": "Minas Gerais",
                    "city": "Belo Horizonte"
                  
            }
        })

    })

})