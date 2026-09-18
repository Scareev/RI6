import Calculo from "./Calculo"

export default class Bhaskara extends Calculo{
    public calcular(n1: number, n2: number, n3?: number): [number, number]{
        let x1 = 0
        let x2 = 0
        const c = n3 === undefined ? 0 : n3 // se n3 não vier, assume c = 0
        const delta = n2**2 - (4 * n1 * c)

        x1 = (-n2 - Math.sqrt(delta)) / (2 * n1)
        x2 = (-n2 + Math.sqrt(delta)) / (2 * n1)

        return [x1, x2]
    }
}