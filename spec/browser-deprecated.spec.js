describe('Browser detection', () => {
  const detectBrowser = require('../src/browser-deprecated');

  it('should be able to detect a browser', () => {
    const ChromeUserAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
      AppleWebKit/537.36 (KHTML, like Gecko) 
      Chrome/62.0.3202.94 Safari/537.36`;

    const FirefoxUserAgent = `Mozilla/5.0 
      (Windows NT 10.0; Win64; x64; rv:57.0) 
      Gecko/20100101 Firefox/57.0`;

    const EdgeUserAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
      AppleWebKit/537.36 (KHTML, like Gecko) 
      Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063`;

    const OperaUserAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
      AppleWebKit/537.36 (KHTML, like Gecko) 
      Chrome/62.0.3202.89 Safari/537.36 OPR/49.0.2725.39`;

    const IEUserAgent = `Mozilla/5.0 (Windows NT 10.0; WOW64; 
      Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; 
      .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`;

    expect(detectBrowser(ChromeUserAgent)).toEqual({
      name: 'Chrome',
      version: 62,
    });

    expect(detectBrowser(FirefoxUserAgent)).toEqual({
      name: 'Firefox',
      version: 57,
    });

    expect(detectBrowser(EdgeUserAgent)).toEqual({
      name: 'Edge',
      version: 15,
    });

    expect(detectBrowser(OperaUserAgent)).toEqual({
      name: 'Opera',
      version: 49,
    });

    expect(detectBrowser(IEUserAgent)).toEqual({
      name: 'IE',
      version: 11,
    });
  });
});
