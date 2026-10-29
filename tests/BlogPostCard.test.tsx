/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react"
import BlogPostCard from "@/components/blog/BlogPostCard"
import type { BlogPost } from "@/data/blog"

const mockPost: BlogPost = {
    slug: "my-first-post",
    title: "My First Post",
    subtitle: "hi",
    date: "2023-08-20",
    type: "Life",
    image: "/test-image.jpg",
    readTime: 5,
}

describe("Render PostCard", () => {
    test("renders the blog post title and read time", () => {
        render(<BlogPostCard post={mockPost} />)

        expect(screen.getByText("My First Post")).toBeInTheDocument()
        expect(screen.getByText("5 MIN READ")).toBeInTheDocument()
    })
})
