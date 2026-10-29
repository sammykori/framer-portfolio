---
title: Navigating the UK Job Market
subtitle: As a Frontend Developer I try to navigate some of the challenges in the Job Market
date: 2023-08-20
type: software engineering
image: /img/blog/post3.jpg
---

## Introduction

When I first started building React applications, I thought performance was mostly about things like `useMemo`, avoiding re-renders, and optimising components.

Over time, I realised something uncomfortable:

I was trying to optimise runtime performance without fully understanding when my code actually runs.

In modern frontend applications (TypeScript, React, Next.js), your code doesn’t just “run”. It goes through multiple phases before a user ever sees anything.

Understanding these phases completely changed how I think about performance.

This article breaks them down simply, especially for developers early in their careers.

---

## The Big Picture

![Compile Build Run Diagram](/img/blog/post4.png)

A modern frontend app goes through four main phases:

**Transpile → Compile → Build → Run**

Each phase:

- Happens at a different time
- Affects different people
- Has a different impact on performance

Think of it like this:

- **Transpile time** → translating the code (usually from TypeScript to JavaScript with tools like Babel or SWC)
- **Compile time** → checking the code (TypeScript or ESLint checks)
- **Build time** → bundling and optimising the code (Webpack, Vite, etc.)
- **Run time** → executing the code in the browser

Only one of these directly affects users, but the others decide how good that experience can be.

---

## Takeaway

The best frontend performance comes from moving work earlier in the pipeline.

In other words: if something can be done at build time, don’t do it at runtime. If something can be caught at compile time, don’t let it reach users.

This is why Next.js, static generation and CDNs exist.

Modern frameworks focus heavily on compile-time optimisations. Once I understood these phases, I stopped blindly optimising React components and started asking a better question:

> When should this work actually happen?

That question alone has made me a better frontend engineer. Hope this article was helpful to you 💙
