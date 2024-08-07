const prompt = require("prompt-sync")();

const {
adicionarLivros,
listarLivros,
atualizarLivros,
deletarLivros,
} = require("./backend.js");

while (true) {
console.log(`
    ---Cadastro de Livros---
    1.Adicionar o titulo do Livro
    2.Listar os livros registrados
    3.Atualizar um livro
    4.Deletar um livro
    0.Sair
    `);

let opcao = Number(prompt("Digite uma opção: "));

switch (opcao) {
    case 1:
    adicionarLivros();
    break;
    case 2:
    listarLivros();
    break;
    case 3:
    atualizarLivros();
    break;
    case 4:
    deletarLivros();
    break;
    case 0:
    process.exit();
    break;
    default:
    console.log("Vocẽ deve digitar uma opção válida!");
    break;
}
}


