/* eslint-disable no-undef */
import { deleteNumber } from '..';

describe('Test deleteNumber Action', () => {
  it('delete number', () => {
    const number = deleteNumber();
    expect(number).toEqual({ type: 'DEL_NUMBER' });
  });
});
