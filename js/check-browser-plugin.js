// Old browser check
(function($) {
    $.fn.checkBrowser = function(options) {

        var defaults = {
            onlyOnce: false,
            supportingBrowsers: 'all',
            warningBoxName: '.old-browser-warning',
            closeBtnName: '#close-old-browser-warning'
        }

        return this.each(function() {

            var settings   = $.extend( {}, defaults, options),
                $onlyOnce = settings.onlyOnce,
                $supportingBrowsers  = $(settings.supportingBrowsers, this),
                $warningBoxName = $(settings.warningBoxName, this),
                $closeBtnName = settings.closeBtnName;


            // Old browser warning close button
            $warningBoxName.on('click', $closeBtnName, function(e) {
                e.preventDefault();

                console.log('as');

                if(!sessionStorage.getItem('browser')) {
                    sessionStorage.setItem('browser','1');
                }

                $warningBoxName.fadeToggle(1200);
            });

            // Detecting version of using browser
            browserDetect = (function() {
                var ua = navigator.userAgent, tem,
                    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if(/trident/i.test(M[1])) {
                    tem =  /\brv[ :]+(\d+)/g.exec(ua) || [];
                    return 'IE ' + (tem[1] || '');
                }
                if(M[1] === 'Chrome') {
                    tem = ua.match(/\bOPR\/(\d+)/)
                    if(tem != null) return 'Opera ' + tem[1];
                }
                M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
                if((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
                return M;
            })();

            // Custom browser settings
            var browsers = {
                Firefox: 27,
                Chrome: 30,
                Opera: 15,
                IE: 10
            };


            var checkBrowser = function(browsers) {
                var storage = sessionStorage.getItem('browser');

                if(storage && storage == '1') return false;

                for(var name in browsers) {
                    if(browserDetect.indexOf(name) != -1 && browsers[name] > browserDetect[1]){
                        $warningBox.show();
                        break;
                    }
                }
            };

            checkBrowser(browsers);
        });
    };
}(jQuery));