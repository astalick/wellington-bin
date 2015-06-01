'use strict';

var BinBuild = require('bin-build');
var logalot = require('logalot');
var bin = require('./');
var pkg = require('../package.json');

bin.run(['-version'], function (err) {
	if (err) {
		logalot.warn(err.message);
		logalot.warn('wellington binary install unsuccessful');
		logalot.error(err.stack);
		return;
	}
	logalot.success('wellington install test passed successfully');
});
