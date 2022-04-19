const elementos = require ('../definicoes/elementosCliente.json')


class Cliente {
    dadosCliente(){
        cy.get (elementos.firstname).type("Diogo");
        cy.get (elementos.lastname).type("Borba");
        cy.get (elementos.postalcode).type("91270650");
    }

}
export default new Cliente()