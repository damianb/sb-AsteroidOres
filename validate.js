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
let sbValidator = require('sb-validatejson')
let config = require('./config.json')
config = config || {}
sbValidator({
	modDir: config.dest || path.join(__dirname, 'src')
})