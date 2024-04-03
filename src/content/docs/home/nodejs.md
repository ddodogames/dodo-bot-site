---
title: Node.js Compliability
---

This is for you if you're confused on what Node.js version is supported to run Dodo-Bot! This contains a list of what Node.js version is supported and what is not. If your Node.js is not supported then it is recommended to update it to a supported version of Node.js.
| Node.js | Supported? | Notes |
|--------|--------|--------|
| **Older versions** | ❌ | None |
| **v12** | ❌ | None |
| **v14** | ❌ | None |
| **v16** | ❌ | None |
| **v17** | ❌ | None |
| **v18** | ❌ | None | 
| **v20** | ✅ | None |
| **v21** | ✅ | None |

Please note that starting from 2.1.0, you can only use node.js v20 and later to installing the bot. There's still a available build of 2.0.0 under ES release types but you will be missing out on many improvements since it's frozen on old stuff compared to the latest one seen in 2.1.0 and later.

# I can run Dodo-Bot on any os?
This depends on which OSes are supported by Node.js. Let's first show the examples: 

## On Windows 

you should be able to run Dodo-Bot just fine unless you're using an EOL os.

For instance, Windows 7 support was dropped early starting with Node.js v14 and so therefore, it is impossible to run Dodo-Bot on Windows 7 for example.
## On Linux
Linux should work always so you will likely have no trouble running Dodo-Bot on it. 

## On MacOS
MacOS has no official support list by Apple and therefore may depend by Node.js team on support for each release so it is recommended to run the latest otherwise if it works on older versions then go ahead.

# Notes
The reason v16 is not going to work properly is because as of September 12 2023, Node.js has ended support for v16 and so packages are subjected to migrate to latest Node.js version such as v18! Note that support for v16 may be eventually dropped.
