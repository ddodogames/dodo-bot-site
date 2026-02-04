---
title: Canary
description: A page about Canary and how to use them.
---

## What is Canary?
Canary is a codename for the absolute newest codebase changes in Dodo-Bot's code. It's the primary place to develop upcoming versions of the bot and as such it may have latest changes and bugs too.

## Using Canary
The installation steps are pretty much the same as in the "Installation" page but you may need to slightly change the way the source code is obtained.

### Manually (not recommended)
[Open the Canary branch](https://github.com/ddodogames/Dodo-Bot/tree/canary) and press "Download ZIP" through the "Code" button, extract it somewhere and there you go.

### Git
This is the recommended method for when installing the Canary version of the bot since it allows updating to the latest changes using `git pull`.

Simply run this in the terminal:
```
git clone -b canary https://github.com/ddodogames/Dodo-Bot
```

For the rest of the install steps, Follow the [Setting up the bot](dodo-bot-site/getting-started/install#setting-up-the-bot) section from the [Installation](dodo-bot-site/getting-started/install) page.

### Without installing
Simply invite the [official Canary bot](https://discord.com/api/oauth2/authorize?client_id=970481494797738016&scope=bot+applications.commands&permissions=36032) into your server and start using the bot using the prefix `d?`.

The only downside of this is if you're paranoid since in this case, you will most likely install the bot using the source code.


