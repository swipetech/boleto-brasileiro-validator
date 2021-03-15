import {Boleto, boleto} from "./boleto"

export enum BoletoRendimento {Consumo, Titulo, Tributo, Invalido}

const isTributo = (boleto:string): boolean => /^(81|85|86|87).*/.test(boleto)

const boletoRendimento = (boletoCode: string): BoletoRendimento => {
    switch (boleto(boletoCode, true)) {
        case Boleto.Simples:
            return BoletoRendimento.Titulo
        case Boleto.Arrecadacao:
            if(isTributo(boletoCode))
                return BoletoRendimento.Tributo
            else
                return BoletoRendimento.Consumo
        case Boleto.Invalido:
            return BoletoRendimento.Invalido
    }
}

export {boletoRendimento}
