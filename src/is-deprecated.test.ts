import { describe, expect, test } from 'vitest';

import { isBrowserDeprecated } from './is-deprecated';

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

    expect(isBrowserDeprecated(browser, supportedBrowsers)).toEqual(true);
  });

  test('Chrome', () => {
    let browser = {
      chrome: 12,
    };

    expect(isBrowserDeprecated(browser, supportedBrowsers)).toEqual(true);

    browser = {
      chrome: 63,
    };

    expect(isBrowserDeprecated(browser, supportedBrowsers)).toEqual(false);
  });

  test('IE', () => {
    const browser = {
      ie: 9,
    };

    expect(isBrowserDeprecated(browser, supportedBrowsers)).toEqual(true);
  });

  test('Opera', () => {
    const browser = {
      opera: 49,
    };

    expect(isBrowserDeprecated(browser, supportedBrowsers)).toEqual(false);
    expect(isBrowserDeprecated(browser)).toEqual(false);
  });

  test('UC Browser', () => {
    const browser = {
      ucbrowser: 13.4,
    };

    expect(isBrowserDeprecated(browser, supportedBrowsers)).toEqual(false);
    expect(isBrowserDeprecated(browser)).toEqual(false);
  });

  test('Non-existing browser - Bear', () => {
    const browser = {
      bear: 1,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(isBrowserDeprecated(browser, supportedBrowsers)).toEqual(false);
  });
});
