# Blog posts

Each `.md` file in this folder is one blog post. The file name becomes the URL,
so `my-new-post.md` is served at `/blog/my-new-post`.

To add a post, copy an existing file, rename it, and edit the frontmatter and body:

```md
---
title: My new post
subtitle: One line that appears under the title
date: 2026-10-18
type: software engineering # one of: software engineering, AI Governance, Immigration, Life
image: /img/blog/my-cover.jpg # put the image in public/img/blog
---

Write the post in Markdown here. Read time is calculated automatically.

## A section heading

A paragraph with **bold**, _italics_ and a [link](https://example.com).

![Image description](/img/blog/another-image.png)

- A bullet
- Another bullet

> A quote

---
```

`---` on its own line draws a divider between sections.
