---
title: "Design Principles for Building a Responsive UI Design System"
date: "2020-04-01"
description: "Some design decisions I made while making my own design system"
tags: ["CSS", "Design System"]
featuredImage: "./featured.jpg"
draft: true
---

In this post (LINK) I talked about what Semantic Styles is, the design system that I have been building, and I bit about why I'm making it. This post explains some design decisions I made while building the system and why I made them.

## Be Framework Agnostic

- Components don't need to live inside of a framework
- Build components from the primitives of the web
- Stay within CSS and HTML elements
- Progressive enhancement: add JS functionality, but only as needed

I achieved this by writing the system in CSS classes and variables, and keeping everything out of JS.

## One System to Many Projects

Have one system for all new projects.

Now that I have a system in many projects, I want to easily pull in any system changes, updates into my upstream projects.

I realized that I want to start building components that exist outside of any JS framework. That way I can have one unified system for all of my projects. I can make updates and add featured

### Node Module

I achieved this by packaging the system as a node module. That way I can pull in changes upstream by updating the package on NPM

### Embrace the Cascade for Local System Overrides and Styles

<!-- Because I want to be able to pull system changes into upstream projects, I had to think about the best way to have a base system, but maintain full customizability locally, while adding custom styles on top. -->

To do this I chose to embrace the cascade.

- Global system styles
- Local system overrides
- My own styles

## Infinite Scale

Scale in terms of screen size, not users. Elements and components should scale from a smartphone up to a large screen television with as few media queries and breakpoints as possible.

### System Token Based off of View Widths

I achieved this by basing the entire system off of one value that is a view width.

### Avoid Setting Max-Widths
