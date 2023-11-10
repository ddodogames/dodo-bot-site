---
title: Flags
---
Flags are optional options for a command of the bot! It allows you to change on how the command will behave when you pass a flag at the command's argument! Be aware that, you must pass the flags at the start of each command's argument otherwise, it won't work.

:::note
This page is focused on dev versions for now. These will become available to the public once 2.0.1 releases.
:::

# Example(s)
* `(prefix)commandname --flag`
* `(prefix)say --embed Hi`

# Avaliable flags
* `--embed` - Enables embeds for `say` command
* `--serverav` - View member's server avatars instead of their main avatars in `avatar` command!
  * Disables the ability to view avatars from anyone outside of the server
  * Will return default one if no server avatar is used
 