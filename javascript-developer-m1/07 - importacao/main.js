
const { gets, print } = require('./funcoes-auxiliares');
//o que ele ta importando

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);

//obs:
// const {nome} = pessoa;  e a mesma coisa que:
// const nome = pessoa.nome;

