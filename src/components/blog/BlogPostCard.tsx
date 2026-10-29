"use client"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { staggerChildFadeUp } from "@/motion"
import { formatPostDate, type BlogPost } from "@/data/blog"
import Tag from "@/components/portfolio/Tag"

type BlogPostCardProps = {
    post: BlogPost
}

function BlogPostCard({ post }: BlogPostCardProps) {
    return (
        <motion.li variants={staggerChildFadeUp} className="w-full">
            <Link
                href={`/blog/${post.slug}`}
                className="group w-full flex flex-col"
            >
                <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="w-full aspect-[3/2] border border-orange-600 p-2"
                >
                    <div className="w-full h-full bg-orange-200 relative overflow-hidden">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        />
                    </div>
                </motion.div>
                <div className="flex justify-between items-baseline gap-4 pt-4">
                    <h3 className="text-2xl font-bold group-hover:text-orange-600 transition-colors">
                        {post.title}
                    </h3>
                    <span className="text-gray-700 whitespace-nowrap">
                        {post.readTime} MIN READ
                    </span>
                </div>
                <p className="text-gray-700 pt-1">{post.subtitle}</p>
                <div className="flex flex-wrap items-center gap-3 pt-3">
                    <Tag variant="solid">{post.type}</Tag>
                    <span className="text-sm text-gray-600">
                        {formatPostDate(post.date)}
                    </span>
                </div>
            </Link>
        </motion.li>
    )
}

export default BlogPostCard
