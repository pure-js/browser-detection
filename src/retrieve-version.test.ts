import { describe, expect, test } from 'vitest';

import { retrieveVersion } from './retrieve-version';

describe('Should correctly eject browser version from string', () => {
  test('Opera', () => {
    const userAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
          AppleWebKit/537.36 (KHTML, like Gecko) 
          Chrome/62.0.3202.89 Safari/537.36 OPR/49.0.2725.39`;
    expect(retrieveVersion('OPR', userAgent)).toEqual(49);
  });
});
