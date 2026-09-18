import * as readline from 'readline';
import Mensagens from './Mensagem';
import Multiplicacao from './Multiplicar';
import Soma from './Somar';
import Subtracao from './Subtrair';
import Bhaskara from './Bhaskara';
import Calculo from './Calculo';
import Potencia from './Potencia';
import Radiciacao from './Radiciacao';
import Divisao from './Divisao';

var mensagens = new Mensagens();

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function extrairNumero(campos: string[], posicao: number): number | undefined {
    if (campos.length <= posicao) return undefined;
    return Number(campos[posicao]);
}

function loop(): void {
    rl.question("Digite os números e a operação desejada:\n", function (entrada: string) {
        var campos = entrada.trim().split(/\s+/);
        var operacao = campos[campos.length - 1]?.toLowerCase() ?? '';

        var num1 = extrairNumero(campos, 0) as number;
        var num2 = extrairNumero(campos, 1) as number;
        var num3 = campos.length > 3 ? extrairNumero(campos, 2) : undefined;

        console.log("Você digitou: " + campos.join(" ") + "\n");

        var operador: Calculo;
        var saida: number | [number, number];

        switch (operacao) {
            case 'sair':
                rl.close();
                return;

            case 'som':
                operador = new Soma();
                console.log("Soma = " + operador.calcular(num1, num2) + "\n");
                break;

            case 'sub':
                operador = new Subtracao();
                console.log("Subtração = " + operador.calcular(num1, num2) + "\n");
                break;

            case 'mul':
                operador = new Multiplicacao();
                console.log("Multiplicação = " + operador.calcular(num1, num2) + "\n");
                break;

            case 'div':
                operador = new Divisao();
                console.log("Divisão = " + operador.calcular(num1, num2) + "\n");
                break;

            case 'pot':
                operador = new Potencia();
                console.log("Potência = " + operador.calcular(num1, num2) + "\n");
                break;

            case 'rad':
                operador = new Radiciacao();
                console.log(num2 + "ª raiz = " + operador.calcular(num1, num2) + "\n");
                break;
            // TUNGSTÊNIO GARCIA!!!!!!!!!!!
            case 'bhaskara':
                operador = new Bhaskara();
                saida = operador.calcular(num1, num2, num3);
                if (Array.isArray(saida)) {
                    console.log("x1 = " + saida[0] + " | x2 = " + saida[1] + "\n");
                }
                break;

            default:
                console.log("Não reconheci essa operação, tente de novo.\n");
        }

        console.log('Para encerrar digite "sair". Para continuar, informe novos valores e a operação.\n');
        loop();
    });
}

mensagens.welcome();
mensagens.options();
mensagens.help();
loop();