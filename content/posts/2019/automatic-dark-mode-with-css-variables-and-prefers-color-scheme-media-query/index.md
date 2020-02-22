---
title: "Responsive UI Themes with @prefers-color-scheme Media Query and CSS Variables"
date: "2019-11-13"
description: "How to detect if a user's operating system is in light / dark mode and present a themed UI with CSS variables"
tags: ["CSS", "Web"]
---

## Responsive Theme Example

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

[MDN prefers-color-scheme documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

[MDN CSS variables documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
