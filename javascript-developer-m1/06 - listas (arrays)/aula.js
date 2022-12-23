
const notas = [];

notas.push(10);
notas.push(10);
notas.push(10);

let soma = 0;

//Estrutura de Repetição

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);

