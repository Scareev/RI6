import Calculo from "./Calculo"

export default class Radiciacao extends Calculo{
    public calcular(n1: number, n2: number){
        return n1**(1/n2)
    }
}