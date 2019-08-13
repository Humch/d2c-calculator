/* eslint-disable no-undef */
import { clickNumber } from '..';

describe('Test clickNumber Action', () => {
  it('click number', () => {
    const number = clickNumber('8');
    expect(number).toEqual({ type: 'CLICK_NUMBER', number: '8' });
  });
});
