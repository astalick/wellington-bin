'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');
var url = 'https://github.com/wellington/wellington/releases/download/v' + pkg.version + '/';
module.exports = new BinWrapper()
	.src(url + 'wt_darwin_amd64.zip', 'darwin')
	.src(url + 'wt_linux_amd64.tar.gz', 'linux')
	.dest( path.join(__dirname, '../vendor/wellington') )
	.use( 'wt')
	.version('>=' + pkg.version);
