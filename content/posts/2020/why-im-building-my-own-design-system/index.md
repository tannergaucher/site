---
title: "Why I'm Making My Own Design System"
date: "2020-02-02"
description: "What is Semantic Styles and why I'm building it"
tags: ["Design System"]
featuredImage: "./featured.jpg"
draft: true
---

## What is Semantic Styles?

Semantic Styles is a design system for composing responsive, themed, UI components and layouts. It's similar to a component library, but it's written in CSS classes and variables. Rather than writing a library of components and importing them into projects, it encourages me to think in and write semantic HTML. The workflow is to write semantic HTML elements, add a matching CSS class, and get as a baseline a themed, responsive UI that's ready to go out of the box.

## Why Am I Building It?

When I start a new project for the web these days, I tend to take a look around at all the different component libraries available before deciding to just write my own components from scratch. There are a lot of great libraries. Personally, none of them spark developer joy. And with layout native to the browser thanks to CSS grid and flexbox, there is less and less reason to use a bootstrap style UI library these days.

Because I regularly start from scratch, I could feel myself writing a lot of redundant boiler plate style code for styling UI components like buttons and inputs.

I also struggled as projects grew to maintain consistency. I realized that even though I don't need a library to make my own decent looking components
from scratch, I do need some set of constraints to work inside of.
