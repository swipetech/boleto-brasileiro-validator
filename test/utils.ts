import {assert} from 'chai';
import {clearMask} from '../src/utils';

describe('Limpar Máscara', () => {
  it('remove pontos', () => {
    const result = clearMask('..');
    assert.equal(result, '');
  });
  it('remove hífens', () => {
    const result = clearMask('--');
    assert.equal(result, '');
  });
  it('remove espaços', () => {
    const result = clearMask('  ');
    assert.equal(result, '');
  });
});
