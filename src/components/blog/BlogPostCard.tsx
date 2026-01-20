import Image from 'next/image'
import { blogPosts } from '@/data/blog'
import Link from 'next/link'

type BlogPostCardProps = {
    post: (typeof blogPosts)[number]
}

function BlogPostCard({ post }: BlogPostCardProps) {
    return (
        <Link href={`/blog/${post.id}`} className="w-full flex flex-col">
            <div className="w-full h-96 border border-gray-300 relative p-2">
                <div className="w-full h-full bg-gray-200 relative">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        className="object-cover grayscale-100 hover:grayscale-60 transition-all"
                    />
                    <div className="absolute w-full h-full bg-linear-to-br from-black/80 via-black/50 to-transparent"></div>
                </div>
            </div>

            <div className="flex justify-between font-bold py-2">
                <h1>{post.title}</h1>
                <h1>{post.readTime} MIN READ</h1>
            </div>
        </Link>
    )
}

export default BlogPostCard
