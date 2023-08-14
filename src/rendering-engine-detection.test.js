import { describe, expect, test } from 'vitest';

import {
  detectRenderingEngineNameAndVersion,
} from './rendering-engine-detection';

describe('Should correctly detect rendering engine', () => {
  test('Blink', () => {
    const chrome = {
      userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64)
        AppleWebKit/537.36 (KHTML, like Gecko)
        Chrome/62.0.3202.94 Safari/537.36`,
    };

    expect(detectRenderingEngineNameAndVersion(chrome)).toEqual({
      name: 'Blink',
      version: 62,
    });
  });

  // test('WebKit', () => {
  //   const safari = {
  //     userAgent: `Mozilla/5.0 (Macintosh;
  //       Intel Mac OS X 10_13_1) AppleWebKit/604.3.5 (KHTML, like Gecko)
  //       Version/11.0.1 Safari/604.3.5`,
  //   };
  //
  //   expect(detectRenderingEngineName(safari)).toEqual({
  //     name: 'Safari',
  //     version: 11,
  //   });
  // });
  //
  // test('Presto', () => {
  //   const ucBrowser = {
  //     userAgent: `UCWEB/2.0 (Java; U; MIDP-2.0; Nokia203/20.37)
  //       U2/1.0.0 UCBrowser/8.7.0.218 U2/1.0.0 Mobile`,
  //   };
  //
  //   expect(detectRenderingEngineName(ucBrowser)).toEqual({
  //     name: 'Uc Browser',
  //     version: 11,
  //   });
  // });
  //
  // test('Trident', () => {
  //   const firefox = {
  //     userAgent: `Mozilla/5.0
  //       (Windows NT 10.0; Win64; x64; rv:57.0)
  //       Gecko/20100101 Firefox/57.0`,
  //   };
  //
  //   expect(detectRenderingEngineName(firefox)).toEqual({
  //     name: 'Firefox',
  //     version: 57,
  //   });
  // });
  //
  // test('Gecko', () => {
  //   const ie = {
  //     userAgent: `Mozilla/5.0 (Windows NT 10.0; WOW64;
  //       Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727;
  //       .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
  //   };
  //
  //   expect(detectRenderingEngineName(ie)).toEqual({
  //     name: 'IE',
  //     version: 11,
  //   });
  // });
});
