/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import BlogPostCard from '@/components/blog/BlogPostCard'
// ... rest of your test

const mockPost = {
    id: 1,
    title: 'My First Post',
    subtitle: 'hi',
    date: 'hi',
    type: 'travel',
    imageUrl: '/test-image.jpg',
    readTime: '5',
}

describe('Render PostCard', () => {
    test('renders the blog post title and read time', () => {
        render(<BlogPostCard post={mockPost} />)

        expect(screen.getByText('My First Post')).toBeInTheDocument()
        expect(screen.getByText('5 MIN READ')).toBeInTheDocument()
    })
})
