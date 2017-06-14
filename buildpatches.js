//
// sb-AsteroidOres - Example mod for multiple Starbound development tools
// ---
// @copyright (c) 2017 Damian Bushong <katana@odios.us>
// @license MIT license
// @url <https://github.com/damianb/>
// @reddit <https://reddit.com/u/katana__>
//
/*jslint node: true, asi: true */
"use strict"
let path = require('path')
let sbPatchbuilder = require('sb-buildpatches')
let config = require('./config.json')
config = config || {}
sbPatchbuilder({
	workingDir: config.workingDir || path.join(__dirname, 'modified'),
	dest: config.dest || path.join(__dirname, 'src'),
	starboundAssets: config.starboundAssets || process.env.STARBOUND_PATH
})