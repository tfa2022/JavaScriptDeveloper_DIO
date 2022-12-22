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
console.log(uno.calcularGastoDePercurso(70, 5));

/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return ("Abaixo do Peso")
        } else if (imc >= 18.5 && imc < 25) {
            return ("Peso Normal")
        } else if (imc >= 25 && imc < 30) {
            return ("acima do peso")
        } else if (imc >= 30 && imc < 40) {
            return ("Obeso")
        } else {
            return ("Obesidade Grave")
        }

    }

}

const jose = new pessoa('jose', 70, 1.75);
console.log(jose.calcularImc());
console.log(jose.classificarImc());

const tiago = new pessoa('tiago', 81, 1.68);
console.log(tiago.calcularImc());
console.log(tiago.classificarImc());
