/// Tarefas interagem com os elementos
/// Cada nova página tem que criar 1 elemento e 1 tarefa
/// Crie uma classe (defina o nome)
/// Crie um método dentro dessa classe
/// no final use o comando export para exportar a classe, colocar () para enviar o método junto
/// no teste precisamos importar a classe

const elementos = require ('../definicoes/elementosLogin.json')

class Login {
    realizarLogin(){
        cy.get (elementos.campoUsername).type("standard_user");
        cy.get (elementos.campoPassword).type("secret_sauce");
        cy.get (elementos.botaoLogin).click();
    }

}
export default new Login()