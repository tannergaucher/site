---
title: "How to Debug the Gatsby Build Process Inside VS Code"
date: "2020-04-01"
description: "Because I always google it."
tags: ["Gatsby"]
featuredImage: "./featured.jpg"
---

```shell

# Run this instead of`gatsby develop`

node --nolazy --inspect-brk node_modules/gatsby/dist/bin/gatsby develop
```

- [Debugging the Build Process](https://www.gatsbyjs.org/docs/debugging-the-build-process/)
