/* eslint-disable no-undef */
import { finishOperation } from '..';

describe('Test finishOperation Action', () => {
  it('finishOperation', () => {
    const finish = finishOperation();
    expect(finish).toEqual({ type: 'FINISH_OPERATION' });
  });
});
