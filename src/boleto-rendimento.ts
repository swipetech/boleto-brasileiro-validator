export enum BoletoRendimento {Consumo, Titulo, Tributo, Unknown}

const boletoRendimento = (boletoCode: string): BoletoRendimento => {
    return BoletoRendimento.Unknown
}

export {boletoRendimento}
