---
title: "Responsive UI Themes with @prefers-color-scheme Media Query and CSS Variables"
date: "2019-11-13"
description: "How to detect if a user's operating system is in light / dark mode and present a themed UI, without any JavaScript."
tags: ["CSS", "Web"]
---

<!-- LOOPED VIDEO / GIF HERE  -->
<!-- INTRO PARAGRAPH TEXT HERE -->

## Minimal Implementation of a Responsive Color Scheme

```css
:root {
  --text-color: black;
  --background: white;
  --href-color: blue;
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-color: white;
    --background: black;
    --href-color: lime;
  }
}

body {
  background: var(--background);
  color: var(--text-color);
}

a {
  color: var(--href-color);
}
```

First declare some root CSS variables. To keep things simple, just a text color, a background color, and a link color. Then add the media query `prefers-color-scheme`, which will detect if the user's system is in dark mode. If we detect dark mode, we can switch any arbitrary CSS value inside the media query. In this case, setting the text color to white and the background color to black.

[MDN prefers-color-scheme documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
