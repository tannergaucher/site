---
title: "Responsive Themes with CSS Variables and one Media Query"
date: "2019-11-13"
description: "A no JavaScript approach to detecting a user's OS light / dark mode and presenting a themed UI."
tags: ["CSS", "Web"]
featuredImage: "./featured.jpg"
---

## Minimal Responsive, Themed UI

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
