#!/usr/bin/env node
'use strict';

var spawn = require('child_process').spawn;
var wellington = require('./');
var input = process.argv.slice(2);

spawn(wellington, input, {stdio: 'inherit'})
	.on('exit', process.exit);
