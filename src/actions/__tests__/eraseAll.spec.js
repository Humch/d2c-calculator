/* eslint-disable no-undef */
import { eraseAll } from '..';

describe('Test eraseAll Action', () => {
  it('erase all', () => {
    const erase = eraseAll();
    expect(erase).toEqual({ type: 'ERASE_ALL' });
  });
});
