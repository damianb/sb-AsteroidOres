# sb-AsteroidOres

AsteroidOres is a simple example Starbound mod demonstrating the use of [SMTk](https://github.com/damianb/smtk) for use in a Windows-based build system.

## why?

All it really does is add some higher tier ores to asteroid fields for easy mining - what's important is how it's done.

My hope is that by allowing mod developers to modify a copy of the original Starbound asset files, it will allow quicker, easier mod development and get developers to spend less time focusing on the niceties of the JSON patch specification and let them spend more time on adding content to their mods.

## configuration

To build the mod correctly:

* Install SMTk
* Within your SMTk installation, run the "tool.unpackassets.bat" script if you do not already have the Starbound assets unpacked somewhere.
* Update the _smtkpath.bat file with the path to your SMTk installation.
* Update the config.bat file accordingly.

## building the mod

Run the "make.bat" file, either through cmd or through double-clicking.

This will do the following:

* Locate the Starbound utilities (such as asset_packer.exe) for use.
* Run the patch builder to create JSON patch files.
* Run PNG compression on any assets in the mod's source directory.
* Run the JSON validator on all JSON-based mod files.
* Build a mod pak file from the mod's source files with Starbound's asset_packer executable.

## license

MIT license.