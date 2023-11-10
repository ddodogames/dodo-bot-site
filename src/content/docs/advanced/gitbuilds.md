---
title: Github Builds
description: An introduction to upcoming versions of Dodo-Bot!
---
Github Builds are development versions of the bot that still isn't ready to be considered as "stable" release. While usually new features or changes are introduced, there may be also bugs considering that this is a unfinished build which is why it's unrecommended for public use or to be used on public bots.

# Installing
Github Builds are obtainable through the branch [gitbuilds](https://github.com/dodogames7/Dodo-Bot/tree/gitbuilds).

This guide will use local hosting for testing purposes for now but you can host the builds on any hosting such as Replit if needed for reasons.

Obtaining the build using Git:
```js
git clone https://github.com/dodogames7/Dodo-Bot -b gitbuilds
```
:::tip[Don't have Git installed?]
You can also directly download the latest dev build [here](https://github.com/DodoGames7/Dodo-Bot/archive/refs/heads/gitbuilds.zip).
:::

This should create a folder called `Dodo-Bot`

Enter into the folder and run `npm install`:
```js
cd Dodo-Bot

// install command
npm install
```

To setup the bot, go to the directory `handler` then `config.json` file to configure the setup options for the bot

Once you're done, open the terminal and run `node .` and the bot should start. Have fun with testing!


# Updating the build
If you have git installed then it should be as easier as running a command in the terminal.

Enter the following command inside the directory that contains the code:
```js
git pull
```

This will update the dev build to the latest version by pulling out the latest commit from Github that has the recent changes made to the bot.

:::tip[Not using Git?]
You may redownload the zip to update to the latest build as there's currently no method to update for non git OSes.
:::