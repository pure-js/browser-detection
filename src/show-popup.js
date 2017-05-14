const defaults = {
  once: true,
  warningEl: '.old-browser-warning',
  closeBtn: '#close-old-browser-warning',
  duration: 1200,
  easing: 'swing',
  browsers: {
    Firefox: 27,
    Chrome: 60,
    Opera: 15,
    IE: 11
  }
};

function browserDeprecated({
  once = defaults.once,
  warningEl = document.querySelector(defaults.warningEl),
  closeBtn = document.querySelector(defaults.closeBtn),
  duration = defaults.duration,
  easing = defaults.easing,
  browsers = defaults.browsers
}) {
  function findBrowser(browsers) {
    let close = sessionStorage.getItem('browserWarningClose');

    // Check if user press on close button
    if(close === 'true') {
      return false;
    }

    // If version of browser is older - you will see the window
    for(let name in browsers) {
      if (browsers.hasOwnProperty(name)) {
        let version = browsers[name];
        if(name === currentBrowser.name && currentBrowser.version < version) {
          warningEl.classList.remove('hide');
          break;
        }
      }
    }
  }

  findBrowser(browsers);
}

function showPopup({
  once = defaults.once,
  warningEl = document.querySelector(defaults.warningEl),
  closeBtn = document.querySelector(defaults.closeBtn),
  duration = defaults.duration,
  easing = defaults.easing,
  browsers = defaults.browsers
}) {
  console.log(browserIsDeprecated(browsers));
  warningEl.classList.add('hide');

  // Old browser warning close button
  closeBtn.addEventListener('click', hidePopup);

  function hidePopup() {
    // Check if parameter is setup we will save user press close button
    if(once) {
      sessionStorage.setItem('browserWarningClose', true);
    }

    warningEl.classList.add('hide');
  }
}
