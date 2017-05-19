//
// sb-buildpatches - Starbound mod helper - patch file builder
// ---
// @copyright (c) 2017 Damian Bushong <katana@odios.us>
// @license MIT license
// @url <https://github.com/damianb/>
// @reddit <https://reddit.com/u/katana__>
//
/*jslint node: true, asi: true */
"use strict"
let path = require('path')
let patchbuilder = require('sb-buildpatches')
let config = require('./config.json')
config = config || {}
config.workingDir = config.workingDir || path.join(__dirname, 'modified')
config.dest = config.dest || path.join(__dirname, 'src')
patchbuilder(config)