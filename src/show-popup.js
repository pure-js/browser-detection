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
    IE: 11,
  },
};

function showPopup({
  once = defaults.once,
  warningEl = document.querySelector(defaults.warningEl),
  closeBtn = document.querySelector(defaults.closeBtn),
  duration = defaults.duration,
  easing = defaults.easing,
  browsers = defaults.browsers,
}) {
  if (once) {
    const close = sessionStorage.getItem('browserWarningClose');

    // Check if user press on close button
    if (close === 'true') {
      hidePopup();
      return false;
    }
  }

  if (browserIsDeprecated(browsers)) {
    warningEl.classList.remove('hide');
  } else {
    warningEl.classList.add('hide');
  }

  function hidePopup() {
    warningEl.classList.add('hide');

    // Check if parameter is setup we will save user press close button
    if (once) {
      sessionStorage.setItem('browserWarningClose', true);
    }
  }

  closeBtn.addEventListener('click', hidePopup);
}
