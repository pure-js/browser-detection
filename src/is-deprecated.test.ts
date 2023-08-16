import {describe, expect, test} from 'vitest';

import {browserIsDeprecated} from './is-deprecated';

describe('Should be able to detect deprecated browser from object', () => {
  const supportedBrowsers = {
    firefox: 27,
    chrome: 60,
    opera: 15,
    ie: 11,
  };

  test('Firefox', () => {
    const browser = {
      firefox: 25,
    };

    expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(true);
  });

  test('Chrome', () => {
    let browser = {
      chrome: 12,
    };

    expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(true);

    browser = {
      chrome: 63,
    };

    expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(false);
  });

  test('IE', () => {
    const browser = {
      ie: 9,
    };

    expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(true);
  });

  test('Opera', () => {
    const browser = {
      opera: 49,
    };

    expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(false);
    expect(browserIsDeprecated(browser)).toEqual(false);
  });

  test('Non-existing browser - Bear', () => {
    const browser = {
      bear: 1,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(false);
  });
});
