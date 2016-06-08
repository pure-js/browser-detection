'use strict';

var checkBrowser = function(options = defaults) {

  var defaults = {
    once: true,
    warningBox: '.old-browser-warning',
    closeBtnName: '#close-old-browser-warning',
    duration: 1200,
    easing: 'swing',
    browsers: {
      Firefox: 27,
      Chrome: 30,
      Opera: 15,
      IE: 11
    }
  };

  var $once = defaults.once,
    $warningBox = defaults.warningBox,
    $closeBtnName = defaults.closeBtnName,
    $duration = defaults.duration,
    $easing = defaults.easing;

  document.querySelector($warningBox).addClass('hide');

  // Old browser warning close button
  document.querySelector($warningBox).on('click', $closeBtnName, function(e) {
    e.preventDefault();

    // Check if parameter is setup we will save user press close button
    if($once === true) {
      sessionStorage.setItem('DoNotShowMeItAgain', 'true');
    }

    document.querySelector($warningBox).fadeToggle($duration, $easing);
  });


  // Detecting browser version
  var browserDetect = (function () {
    var ua = navigator.userAgent, tem,
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
    
    return M;
  })();


  var checkBrowser = function(takesBrowsers) {
    var storage = sessionStorage.getItem('DoNotShowMeItAgain');

    // Check if user press close button
    if(storage === 'true') {
      return false;
    }

    // If version of browser more old you will see window
    for(var name in takesBrowsers) {
      if(browserDetect.indexOf(name) != -1 && takesBrowsers[name] > browserDetect[1]) {
        $warningBox.show();
        break;
      }
    }
  }(settings.browsers);
};
