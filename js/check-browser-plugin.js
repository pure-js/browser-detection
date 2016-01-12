// Old browser check
(function($) {
  'use strict';

  $.fn.checkBrowser = function(options) {

    var defaults = {
      once: 'No',
      warningBoxName: '.old-browser-warning',
      closeBtnName: '#close-old-browser-warning',
      duration: 1200,
      easing: 'swing',

      browsers: {
        Firefox: 27,
        Chrome: 30,
        Opera: 15,
        IE: 10
      }
    };


    return this.each(function() {

      var settings = $.extend( {}, defaults, options),
        $once = settings.once,
        $warningBoxName = $(settings.warningBoxName, this),
        $closeBtnName = settings.closeBtnName,
        $duration = settings.duration,
        $easing = settings.easing;


      $warningBoxName.hide();


      // Old browser warning close button
      $warningBoxName.on('click', $closeBtnName, function(e) {
        e.preventDefault();

        // Check if parameter is setup we will save user press close button
        if($once == 'Yes') {
          sessionStorage.setItem('DoNotShowMeItAgain', 'Yes');
        }

        $warningBoxName.fadeToggle($duration, $easing);
      });


      // Detecting version of using browser
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
        if(storage == 'Yes') {
          return false;
        }

        // If version of browser more old you will see window
        for(var name in takesBrowsers) {
          if(browserDetect.indexOf(name) != -1 && takesBrowsers[name] > browserDetect[1]) {
            $warningBoxName.show();
            break;
          }
        }
      }(settings.browsers);
    });
  };
}(jQuery));
