# sb-AsteroidOres

AsteroidOres is a simple example Starbound mod demonstrating the use of [sb-buildpak](https://github.com/damianb/sb-buildpak) and [sb-buildpatches](https://github.com/damianb/sb-buildpatches). for use in a Windows-based build system.

## why?

All it really does is add some higher tier ores to asteroid fields for easy mining - what's important is how it's done.

My hope is that by allowing mod developers to modify a copy of the original Starbound asset files, it will allow quicker, easier mod development and get developers to spend less time focusing on the niceties of the JSON patch specification and let them spend more time on adding content to their mods.

## license

MIT license.

## building the mod

Run the "buildpak.bat" file, either through cmd or through double-clicking.

This will do the following:

* Locate the Starbound asset_packer executable for use.
* Run the pre-pak hook bat file - which will run buildpatches.js, which rebuilds our Starbound asset patch files.
* Pack the src directory into a pak with asset_packer, including our newly generated Starbound asset patch files.