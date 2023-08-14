import { expect, test } from 'vitest';

import {browserIsDeprecated} from './is-deprecated';

test('Should be able to detect deprecated browser from object', () => {
  const supportedBrowsers = {
    Firefox: 27,
    Chrome: 60,
    Opera: 15,
    IE: 11,
  };

  let browser = {
    Firefox: 25,
  };

  expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(true);

  browser = {
    Chrome: 12,
  };

  expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(true);

  browser = {
    Chrome: 63,
  };

  expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(false);

  browser = {
    IE: 9,
  };

  expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(true);

  browser = {
    Opera: 49,
  };

  expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(false);

  expect(browserIsDeprecated(browser)).toEqual(false);

  browser = {
    Bear: 1,
  };

  expect(browserIsDeprecated(browser, supportedBrowsers)).toEqual(false);
});
