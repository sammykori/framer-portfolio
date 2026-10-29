"use client"
import { useState } from "react"
import { motion } from "motion/react"
import { staggerParent } from "@/motion"
import { postTypes, type BlogPost } from "@/data/blog"
import BlogPostCard from "./BlogPostCard"

type BlogListProps = {
    posts: BlogPost[]
}

const filters = ["all", ...postTypes] as const

function BlogList({ posts }: BlogListProps) {
    const [active, setActive] = useState<(typeof filters)[number]>("all")
    const visible =
        active === "all" ? posts : posts.filter((post) => post.type === active)

    return (
        <>
            <ul className="w-full flex flex-row gap-3 pb-10 overflow-x-auto">
                {filters.map((filter) => (
                    <li key={filter}>
                        <button
                            type="button"
                            onClick={() => setActive(filter)}
                            className={`whitespace-nowrap border px-4 py-2 text-sm tracking-widest transition-colors ${
                                active === filter
                                    ? "border-black bg-black text-orange-100"
                                    : "border-orange-600 text-orange-700 hover:bg-orange-200/60"
                            }`}
                        >
                            {filter.toUpperCase()}
                        </button>
                    </li>
                ))}
            </ul>

            {visible.length === 0 ? (
                <p className="text-lg text-gray-700 border-y border-orange-600 py-10 text-center">
                    Nothing here yet. Check back soon.
                </p>
            ) : (
                <motion.ul
                    key={active}
                    variants={staggerParent}
                    initial="hidden"
                    animate="visible"
                    className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14"
                >
                    {visible.map((post) => (
                        <BlogPostCard key={post.slug} post={post} />
                    ))}
                </motion.ul>
            )}
        </>
    )
}

export default BlogList
