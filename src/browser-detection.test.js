import {
  detectBrowserName,
  detectBrowserVersion,
  detectBrowserNameAndVersion,
} from './browser-detection';

describe('Should correctly detect name & version of', () => {
  test('Chrome', () => {
    const chrome = {
      userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
        AppleWebKit/537.36 (KHTML, like Gecko) 
        Chrome/62.0.3202.94 Safari/537.36`,
    };

    expect(detectBrowserNameAndVersion(chrome)).toEqual({
      name: 'Chrome',
      version: 62,
    });

    const chromeMobile = {
      userAgent: `Mozilla/5.0 (Linux; Android 6.0; 
        Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, 
        like Gecko) Chrome/62.0.3202.94 Mobile Safari/537.36`,
    };

    expect(detectBrowserNameAndVersion(chromeMobile)).toEqual({
      name: 'Chrome',
      version: 62,
    });
  });

  test('Safari', () => {
    const safari = {
      userAgent: `Mozilla/5.0 (Macintosh; 
        Intel Mac OS X 10_13_1) AppleWebKit/604.3.5 (KHTML, like Gecko) 
        Version/11.0.1 Safari/604.3.5`,
    };

    expect(detectBrowserNameAndVersion(safari)).toEqual({
      name: 'Safari',
      version: 11,
    });
  });

  test('UC Browser', () => {
    const ucBrowser = {
      userAgent: `UCWEB/2.0 (Java; U; MIDP-2.0; Nokia203/20.37)
        U2/1.0.0 UCBrowser/8.7.0.218 U2/1.0.0 Mobile`,
    };

    expect(detectBrowserNameAndVersion(ucBrowser)).toEqual({
      name: 'UC Browser',
      version: 8.7,
    });

    const ucBrowser11 = {
      userAgent: `Mozilla/5.0 (Linux; U; Android 4.2.2; en-US;
        Micromax A102 Build/MicromaxA102) AppleWebKit/534.30 
        (KHTML, like Gecko) Version/4.0 UCBrowser/11.1.0.882 U3/0.8.0 
        Mobile Safari/534.30`,
    };

    expect(detectBrowserNameAndVersion(ucBrowser11)).toEqual({
      name: 'UC Browser',
      version: 11,
    });
  });

  test('Firefox', () => {
    const firefox = {
      userAgent: `Mozilla/5.0 
        (Windows NT 10.0; Win64; x64; rv:57.0) 
        Gecko/20100101 Firefox/57.0`,
    };

    expect(detectBrowserNameAndVersion(firefox)).toEqual({
      name: 'Firefox',
      version: 57,
    });
  });

  test('Internet Explorer', () => {
    const ie = {
      userAgent: `Mozilla/5.0 (Windows NT 10.0; WOW64; 
        Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; 
        .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
    };

    expect(detectBrowserNameAndVersion(ie)).toEqual({
      name: 'IE',
      version: 11,
    });
  });

  test('Opera', () => {
    const opera = {
      userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
        AppleWebKit/537.36 (KHTML, like Gecko) 
        Chrome/62.0.3202.89 Safari/537.36 OPR/49.0.2725.39`,
    };

    expect(detectBrowserNameAndVersion(opera)).toEqual({
      name: 'Opera',
      version: 49,
    });
  });

  test('Samsung Internet', () => {
    const samsung = {
      userAgent: `Mozilla/5.0 (Linux; Android 5.1.1; 
        SAMSUNG SM-G360T1 Build/LMY47X)
        AppleWebKit/537.36 (KHTML, like Gecko)
        SamsungBrowser/3.3 Chrome/38.0.2125.102 Mobile Safari/537.36`,
    };

    expect(detectBrowserNameAndVersion(samsung)).toEqual({
      name: 'Samsung Internet',
      version: 3,
    });
  });

  test('Android browser', () => {
    const android = {
      userAgent: `Mozilla/5.0 (Linux; U; Android 4.0.4;
       pt-br; MZ608 Build/7.7.1-141-7-FLEM-UMTS-LA) 
       AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30`,
    };

    expect(detectBrowserNameAndVersion(android)).toEqual({
      name: 'Android Browser',
      version: 4,
    });
  });

  test('Edge', () => {
    const edge = {
      userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
        AppleWebKit/537.36 (KHTML, like Gecko) 
        Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063`,
    };

    expect(detectBrowserNameAndVersion(edge)).toEqual({
      name: 'Edge',
      version: 15,
    });
  });
});

describe('Should work correctly', () => {
  test('If can not find a version', () => {
    const ieWithoutVersion = {
      userAgent: `Mozilla/5.0 (Windows NT 10.0; WOW64; 
        Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; 
        .NET CLR 3.0.30729; .NET CLR 3.5.30729) like Gecko`,
    };

    expect(detectBrowserNameAndVersion(ieWithoutVersion)).toEqual({
      name: 'IE',
      version: null,
    });
  });

  test('if user agent is invalid', () => {
    const emptyUserAgent = {
      userAgent: '',
    };

    expect(detectBrowserNameAndVersion(emptyUserAgent)).toEqual({
      name: undefined,
      version: NaN,
    });
  });
});

describe('Should correctly detect name of', () => {
  test('Chrome', () => {
    const chrome = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
      AppleWebKit/537.36 (KHTML, like Gecko) 
      Chrome/62.0.3202.94 Safari/537.36`;

    expect(detectBrowserName(chrome)).toEqual('Chrome');
  });
});

describe('Should correctly detect version of', () => {
  test('UC Browser', () => {
    const ucBrowser = {
      userAgent: `UCWEB/2.0 (Java; U; MIDP-2.0; Nokia203/20.37)
        U2/1.0.0 UCBrowser/8.7.0.218 U2/1.0.0 Mobile`,
    };
    const name = 'UC Browser';

    expect(detectBrowserVersion(ucBrowser, name)).toEqual(8.7);
  });
});
