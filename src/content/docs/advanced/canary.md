---
title: Canary
---
# What is Canary?
Canary are development versions of Dodo-Bot stored in a separate branch of our Github repo. These pre-releases may sometimes contain breaking changes, improvements, bug fixes and possibly removal of some stuff. It is not recommended to use them daily for personal usage as they may contain bugs.

During the phase of a version still on Canary, you will be able to report the bugs early before they slip through cracks and reach the next stable release.

# Methods of testing
There're 3 ways of testing Canary version. These are being:
* Downloading a released Pre-release build through [releases](https://github.com/ddodogames/Dodo-Bot/releases)
* Downloading through the latest commit of canary branch
* Inviting [Official Dodo-Bot Canary bot](https://discord.com/api/oauth2/authorize?client_id=970481494797738016&scope=bot+applications.commands&permissions=36032) into your server to directly test the latest Pre-release builds
  * If you have invited the bot to a server, the prefix is `d?` so make sure to remember that in order to use it.


For now, The installation method will focus on downloading the latest incomplete builds but feel free to use the other methods listed above!

# Installing
Canary builds are obtainable through the branch [canary](https://github.com/ddodogames/Dodo-Bot/tree/canary).

This guide will use local hosting for testing purposes for now but you can host the builds on any hosting such as Replit if needed for reasons.

Obtaining the build using Git:
```js
// installing v2 pre-release build
git clone https://github.com/ddodogames/Dodo-Bot -b canary

// installing rebase pre-release build
git clone https://github.com/ddodogames/Dodo-Bot -b canary-rebase
```
:::note[Don't have Git installed?]
You can directly download the latest build by latest commit here [here](https://github.com/ddodogames/Dodo-Bot/archive/refs/heads/canary.zip).
:::

This should create a folder called `Dodo-Bot`

Now setting up the latest build should be as easy as:
```js
cd Dodo-Bot // go to the directory first
npm install // install the required packages
```

To setup the bot, go to `config.js` and configure the available setup options for the bot.

Once you're done, open the terminal and run `node .` and the bot should start. Have fun testing!


# Updating the install
Since 2.2.3, Support for updating Installs to latest changes is possible without redownloading the latest build.

:::note
This only works if you have Git installed.
:::

Go to the directory of the current install you have and simply run this in terminal:
```js
git pull
```

This will update your Canary install to the latest changes as of recent commit from the [canary](https://github.com/ddodogames/Dodo-Bot/tree/canary) branch.


