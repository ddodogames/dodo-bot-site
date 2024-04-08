---
title: GitBuilds
description: An introduction to upcoming versions of Dodo-Bot!
---
GitBuilds are development versions of Dodo-Bot hosted on Github that isn't ready to be considered as "stable" release. While usually new features or changes are introduced, there may be also bugs considering that they're unfinished builds which is why it's not recommended for public use as they're only meant for testing.


# Installing
GitBuilds are obtainable through the branch [gitbuilds](https://github.com/dodogames7/Dodo-Bot/tree/gitbuilds).

This guide will use local hosting for testing purposes for now but you can host the builds on any hosting such as Replit if needed for reasons.

Obtaining the build using Git:
```js
git clone https://github.com/dodogames7/Dodo-Bot -b gitbuilds
```
:::tip[Don't have Git installed?]
You can also directly download the latest dev build [here](https://github.com/DodoGames7/Dodo-Bot/archive/refs/heads/gitbuilds.zip).
:::

This should create a folder called `Dodo-Bot`

Now setting up the latest build should be as easy as:
```js
cd Dodo-Bot && npm install
```

To setup the bot, go to `config.json` and configure the available setup options for the bot.

Once you're done, open the terminal and run `node .` and the bot should start. Have fun with testing!


# Updating the build
If you have git installed then it should be as easier as running a command in the terminal. It is also recommended to regular use `npm install` command as well as GitBuilds builds may sometimes update aoi.js development builds to latest

Enter the following command inside the directory that contains the code:
```js
git pull && npm install
```

This will update your current install to the latest development build by pulling out the latest files from the branch including updating the packages to their latest versions.

:::tip[Not using Git?]
You may redownload the zip to update to the latest build as there's currently no method to update for non git OSes.
:::