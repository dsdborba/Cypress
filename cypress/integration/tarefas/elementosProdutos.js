const elementos = require("../definicoes/elementosProdutos.json")

class Produto{
    selecionarProduto(){
        cy.get(elementos.imagemProduto).click();
    }
    
}
export default new Produto