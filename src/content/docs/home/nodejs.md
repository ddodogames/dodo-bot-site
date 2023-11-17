---
title: Node.js Compliability
---

This is for you if you're confused on what Node.js version is supported to run Dodo-Bot! This contains a list of what Node.js version is supported and what is not. If your Node.js is not supported then it is recommended to update it to a supported version of Node.js.
| Node.js | Supported? | Notes |
|--------|--------|--------|
| **Older versions** | ❌ | None |
| **v12** | ❌ | None |
| **v14** | ❌ | None |
| **v16** | ⚠  | May not work properly. Update to latest for better experience |
| **v17** | ✅ | None |
| **v18** | ✅ | None | 
| **v20** | ✅ | None |
| **v21** | ✅ | None |

# I can run Dodo-Bot on any os?
This depends on which OSes are supported by Node.js. On Windows, you should be able to run Dodo-Bot on windows just fine unless you're using an EOL os.

For instance, Windows 7 support was dropped early starting with Node.js v14 and so therefore, it is impossible to run Dodo-Bot on Windows 7 for example.

Linux should work always so you will likely have no trouble running Dodo-Bot on it. Mac os however, has no official support list by Apple and therefore may depend by Node.js team on support for each release so it is recommended to run the latest otherwise if it works on older versions then go ahead.

# Notes
The reason v16 is not going to work properly is because as of September 12 2023, Node.js has ended support for v16 and so packages are subjected to migrate to latest Node.js version such as v18! Note that support for v16 may be eventually dropped.
