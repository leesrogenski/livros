const prompt = require("prompt-sync")({sign: true});

let livros = []

let countId = 1;

function getindice(id) {
    const indice = livros.findIndex((el) => el.id == id);
    
    if (indice == -1) {
        console.log("Id inexistente");
    } 
    return indice;
}

const modelo = (id) => {
    let titulo = prompt("Titulo de livro: ");
    let autor = prompt("Qual o autor do livro: ");
    let ano = prompt("Qual o ano de lançamento: ");
    let genero = prompt("Qual o gênero do livro: ")

    let novasVersoes = [];

    while(true) {
        let livro = prompt(
            "Ano do novo lançamento. (Caso não exista, digite 'fim')."
        );
        
        if(livro === 'fim') {
            break;
        }else{
            novasVersoes.push(livro);
        }
    }
    if(titulo != "" && autor != "" && !isNaN(ano) && genero != "" && novasVersoes.length > 0) {
        if(id === undefined) {
            return{
                titulo,
                autor,
                ano,
                genero,
                id: countId++,
            };
        }else{
            return{
                titulo, 
                autor,
                ano,
                genero,
                id,
            };
        }
    }else{
        console.log("Dados invalidos!");
        return undefined;
    }
}

const adicionarLivros = () => {
    let livro = modelo();

    if(livro !== undefined) {
        livros.push(livro);
        console.log("Livro adicionado com sucesso! ");
        console.log(livros);
    }
};

const listarLivros = () => {
    if (livros.length === 0) {
    console.log("Não possui nenhum livro registrado!");
    return false;
    } else {
    livros.forEach((livro) => {
        console.log(
        `ID:${livro.id}, 
        Titulo: ${livro.titulo}, 
        Autor: ${livro.autor}, 
        Ano de lançamento: ${livro.anoLancamento}
        Gênero: ${livro.genero}`
        );
        livro.novasVersoes.forEach((livro, indice) => {
        console.log(`Nova versão: ${indice + 1}: ${livro}`);
        });
    });
    return true;
    }
};

const atualizarLivros = () => {
    if (listarLivros()) {
    const id = parseInt(prompt("Qual ID deseja editar: "));

    const indice = livros.findIndex((livro) => id === livro.id);

    if (indice !== -1) {
        let livroEditado = modelo(id);
        
        if (livroEditado !== undefined) {
        livros[indice] = livroEditado;
        console.log("Livro Atualizado!");
        }
    } else {
        console.log("ID inexistente");
    }
    }
};

const deletarLivros = () => {
    if (listarLivros()) {
    const id = parseInt(prompt("Qual ID deseja remover: "));

    const indice = livros.findIndex((livro) => id === livro.id);

    if (indice !== -1) {
        livros.splice(indice, 1);
        console.log("Livro removido!");
    } else {
        console.log("ID inexistente");
    }
    }
};

module.exports = {
    adicionarLivros,
    listarLivros,
    atualizarLivros,
    deletarLivros,
};