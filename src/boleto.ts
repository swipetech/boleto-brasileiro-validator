import {boletoArrecadacao} from './boleto-arrecadacao';
import {boletoBancario} from './boleto-bancario';
import {clearMask} from './utils';

export enum Boleto {
    Simples, Arrecadacao, Invalido
}

export function boleto(codigo: string, validarBlocos: boolean = false): Boleto {
    const cod = clearMask(codigo);
    if (Number(cod[0]) === 8)
        return boletoArrecadacao(cod, validarBlocos) ? Boleto.Arrecadacao : Boleto.Invalido;
    return boletoBancario(cod, validarBlocos) ? Boleto.Simples : Boleto.Invalido;
}
