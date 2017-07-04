/**
 * POSTCSS RGB
 * A postcss plugin to use rgb and rgba with hex values
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let postcss = require('postcss'),
    util = require('postcss-plugin-utilities');

// export plugin
module.exports = postcss.plugin('postcss-rgb', options => {
    return css => {
        css.walkDecls(decl => {
            if(decl.value.indexOf('rgb(') >= 0 || decl.value.indexOf('rgba(') >= 0) {
                // parse rgba values
                decl.value = decl.value.replace(/rgba\(([^\,\)]+)(\,([\s]+)?[^\)\,]+)\)/ig, (str, clr, alpha = null) => {
                    clr = clr.trim();
                    clrName = util.nameToHex(clr);
                    if (clrName) { clr = clrName; }
                    clrHex = util.hexToRGB(clr);
                    clr = (clrHex)? clrHex : {r: '204', g: '204', b: '204'};
                    return `rgba(${clr.r}, ${clr.g}, ${clr.b}${alpha})`;
                });

                // parse rgb values
                decl.value = decl.value.replace(/rgb\(([^\,\)]+)\)/ig, (str, clr) => {
                    clr = clr.trim();
                    clrName = util.nameToHex(clr);
                    if (clrName) { clr = clrName; }
                    clrHex = util.hexToRGB(clr);
                    clr = (clrHex)? clrHex : {r: '204', g: '204', b: '204'};
                    return `rgb(${clr.r}, ${clr.g}, ${clr.b})`;
                });
            }
        });
    }
});