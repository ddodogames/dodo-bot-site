---
title: Installation
description: This page is dedicated to how to install Dodo-Bot and set it up.
---

# Getting the source code
To get started, you will need to download the bot's source code either by manually browsing the repo then downloading it as a ZIP file or by using Git directly through `git clone`

### Manually
[Open the GitHub repo](https://github.com/ddodogames/Dodo-Bot) then press the green "Code" button and then "Download ZIP" to download the source code. Extract it elsewhere and you're now done with getting the source code first.

### Git
This method is much better than the manual one and it allows you to update the bot with just `git pull` rather than re-downloading the latest version as a ZIP file.

Assuming that Git is installed, open a terminal and then type the following:
```
git clone https://github.com/ddodogames/Dodo-Bot

# You can also get a specific version available like v2 for example
git clone -b v2 https://github.com/ddodogames/Dodo-Bot
```

a Folder called "Dodo-Bot" should appear in the directory where you executed the command in.

# Setting up the bot
Open the folder containing the bot's code and look for a `config.js` file. 

All options in the config are described [here](https://github.com/ddodogames/Dodo-Bot#configuration).

Once you're done, execute `npm install` to install the required packages from `package.json` file and then execute `node index.js` to start the bot!

# Done!
You're now set! Enjoy using the bot! :>


