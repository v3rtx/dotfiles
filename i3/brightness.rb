#!/usr/bin/env ruby
UP = 1.25

command = ARGV.first
multiplier = command == "up" ? UP : (1.0/UP)

current_brightness = `xbacklight -get`.strip.to_f
new_brightness = current_brightness * multiplier

if new_brightness < 2
	new_brightness = command == "up" ? 2 : 0
end

`xbacklight -set #{new_brightness}`
