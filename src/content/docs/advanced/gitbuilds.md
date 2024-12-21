---
title: GitBuilds
description: An introduction to upcoming versions of Dodo-Bot!
---
GitBuilds are development versions of Dodo-Bot hosted on Github that isn't ready to be considered as "stable" release. While usually new features or changes are introduced, there may be also bugs considering that they're unfinished builds which is why it's not recommended for public use as they're only meant for testing.

# Methods of testing
There're 3 ways of testing GitBuilds. These are being:
* Downloading a released Pre-release build through [releases](https://github.com/ddodogames/Dodo-Bot/releases)
* Downloading the latest incomplete Pre-release build of a upcoming GitBuilds build
* Inviting [Official Dodo-Bot Alpha bot](https://discord.com/api/oauth2/authorize?client_id=970481494797738016&scope=bot+applications.commands&permissions=36032) into your server to directly test the latest Pre-release builds


For now, The installation method will focus on downloading the latest incomplete builds but feel free to use the other methods listed above!

# Installing
GitBuilds are obtainable through the branch [gitbuilds](https://github.com/ddodogames/Dodo-Bot/tree/gitbuilds).

This guide will use local hosting for testing purposes for now but you can host the builds on any hosting such as Replit if needed for reasons.

Obtaining the build using Git:
```js
// installing v2 pre-release build
git clone https://github.com/ddodogames/Dodo-Bot -b gitbuilds

// installing rebase pre-release build
git clone https://github.com/ddodogames/Dodo-Bot -b gitbuilds-rebase
```
:::tip[Don't have Git installed?]
You can also directly download the latest dev build [here](https://github.com/ddodogames/Dodo-Bot/archive/refs/heads/gitbuilds.zip).
:::

This should create a folder called `Dodo-Bot`

Now setting up the latest build should be as easy as:
```js
cd Dodo-Bot && npm install
```

To setup the bot, go to `config.json` and configure the available setup options for the bot.

Once you're done, open the terminal and run `node .` and the bot should start. Have fun with testing!


# Updating the build

You may redownload the latest build's files to do this. Then you can simply go back to your current installation of the build you're running and replace all of the files with the latest ones. Ensure that you have your bot token saved before doing this.

Then you're good to go after doing all of this and starting the bot.
