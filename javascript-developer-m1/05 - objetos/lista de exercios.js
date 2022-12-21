/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/
class carro {
    marca;
    cor;
    gastoMedioporKm;

    constructor(marca, cor, gastoMedioporKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioporKm = gastoMedioporKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioporKm * precoCombustivel;
    }

}

const uno = new carro('fiat', 'azul', 1 / 12);
//console.log(uno);
console.log(uno.calcularGastoDePercurso(70, 5));

/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/



