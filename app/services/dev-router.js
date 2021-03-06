/* jshint sub:true */

define(['app'], function(app) {
    'use strict';
    /***************************************************************************************
     * dev env variables
     ***************************************************************************************/
    app.factory('devRouter', [function() {

        var domain = document.location.hostname.replace(/[^\.]+\./, '');

        if ((~domain.indexOf('localhost') || ~domain.indexOf('cbddev.xyz') ))
          domain='cbddev.xyz';
        else if (~domain.indexOf('staging.cbd.int'))
          domain='staging.cbd.int';
        else
          domain = 'cbd.int';

        var ACCOUNTS_URI = 'https://accounts.' + domain;


        return {
            ACCOUNTS_URI: ACCOUNTS_URI,
            DOMAIN: domain
        };
    }]);
});
