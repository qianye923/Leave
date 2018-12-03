
/**
 * 
 * 移动端的适配    
 * css 依然用rem;
 * 此方式在iphone6的屏幕下 html的font-size=50px; 即是 1rem=50px;
 *
 *
 */
    (function (win, doc) {
        if (!win.addEventListener) return;
        var html = document.documentElement;
        function setFont() {
            var cliWidth = html.clientWidth;
            html.style.fontSize = 100 * (cliWidth / 750) + 'px';
        }
        win.addEventListener('resize', setFont, false);
        setFont();
    })(window, document);
