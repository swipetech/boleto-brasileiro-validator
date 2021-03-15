import {boletoRendimento, BoletoRendimento} from '../src/boleto-rendimento'
import {assert} from 'chai';

describe('Indentifica boleto para o Rendimento', () => {
    it('boleto de consumo', (): void => {
        const result = boletoRendimento('826200000006731500100532022607420019032021800035')
        console.log(result)
        assert.equal(result, BoletoRendimento.Consumo);
    })

    it('boleto de consumo errado', (): void => {
        const result = boletoRendimento('84600000013682029621931004000000123456')
        assert.equal(result, BoletoRendimento.Invalido);
    })

    it('boleto titulo', (): void => {
        const result = boletoRendimento('00190000090326892600705967933176185120000003949')
        assert.equal(result, BoletoRendimento.Titulo);
    })

    it('boleto titulo errado', (): void => {
        const result = boletoRendimento('0019000090326892600705967933176185120000003949')
        assert.equal(result, BoletoRendimento.Invalido);
    })

    it('boleto de consumo', (): void => {
        const result = boletoRendimento('858600000004600003282102810708210714143007550081')
        assert.equal(result, BoletoRendimento.Tributo);
    })

    it('boleto de consumo errado', (): void => {
        const result = boletoRendimento('85860000004600003282102810708210714143007550081')
        assert.equal(result, BoletoRendimento.Invalido);
    })
})
