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

function checkBrowser({
  once = defaults.once,
  warningEl = document.querySelector(defaults.warningEl),
  closeBtn = document.querySelector(defaults.closeBtn),
  duration = defaults.duration,
  easing = defaults.easing,
  browsers = defaults.browsers
}) {

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

  // Detecting browser version
  function browserDetect() {
    let ua = navigator.userAgent, tem,
      M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return 'IE ' + (tem[1] || '');
    }

    if (M[1] === 'Chrome') {
      tem = ua.match(/\bOPR\/(\d+)/);
      if (tem !== null) return 'Opera ' + tem[1];
    }

    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];

    if ((tem = ua.match(/version\/(\d+)/i)) !== null) M.splice(1, 1, tem[1]);

    let browser = {
      name: M[0],
      version: M[1]
    }

    return browser;
  }

  let currentBrowser = browserDetect();

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
