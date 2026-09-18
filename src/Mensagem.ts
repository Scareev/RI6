import { log } from "node:console";

export default class Mensagem{
    public welcome = () => {console.log("Bem vindo a calculadora!");}
    public options = () => {
        console.log("Opções seguintes:");
        console.log("Soma / Subtração / Multiplicação / Divisão / Potênciação / Racidiciação / Calculo de Bhaskara\n");
        console.log("COMANDOS RESPECTIVOS");
        console.log("som / sub / mul / div / pot / rad / bhaskara");

        
        
        
    }
    public help = () => {

        console.log("MODELO:");
        console.log("X Y COMANDO");

    }
}