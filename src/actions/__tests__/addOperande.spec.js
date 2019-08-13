/* eslint-disable no-undef */
import { addOperande } from '..';

describe('Test addOperande Action', () => {
  it('add operande', () => {
    const operande = addOperande('+');
    expect(operande).toEqual({ type: 'ADD_OPERANDE', operande: '+' });
  });
});
