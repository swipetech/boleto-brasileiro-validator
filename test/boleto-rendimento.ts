import {boletoRendimento, BoletoRendimento} from '../src/boleto-rendimento'
import {assert} from 'chai';

describe('Indentifica boleto para o Rendimento', () => {
    it('boleto de consumo, sem máscara', (): void => {
        const result = boletoRendimento('846000000013682029621931004000000123456')
        assert.equal(result, BoletoRendimento.Consumo);
    })
})
