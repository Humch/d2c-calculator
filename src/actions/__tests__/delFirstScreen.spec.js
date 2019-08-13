/* eslint-disable no-undef */
import { delFirstScreen } from '..';

describe('Test delFirstScreen Action', () => {
  it('delete first screen', () => {
    const del = delFirstScreen();
    expect(del).toEqual({ type: 'DEL_FIRST_SCREEN' });
  });
});
