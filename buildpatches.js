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
let patchbuilder = require('sb-buildpatches')
patchbuilder({
	workingDir: 'D:\\code\\starbound\\sb-AsteroidOres\\modified',
	dest: 'D:\\code\\starbound\\sb-AsteroidOres\\src',
	starboundAssets: 'E:\\Steam\\steamapps\\common\\Starbound\\assets\\packed'
})