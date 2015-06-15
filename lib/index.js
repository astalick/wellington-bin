'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');
var url = 'https://github.com/wellington/wellington/releases/download/v' + pkg.version + '/';
module.exports = new BinWrapper()
	.src(url + 'wt_darwin_amd64.zip', 'darwin')
	.src('https://circle-artifacts.com/gh/wellington/wellington/548/artifacts/0/tmp/circle-artifacts.BlQjBpj/v0.8.1/linux_amd64/wt', 'linux')
	.dest( path.join(__dirname, '../vendor/wellington') )
	.use( 'wt')
	.version('>=' + pkg.version);
