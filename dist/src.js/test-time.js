'use strict';

var devTime = require('dev-time');

devTime('SamVerschueren').then(function (time) {
    console.log(time);
    //=> '2015-12-07T08:34:55+01:00'
});