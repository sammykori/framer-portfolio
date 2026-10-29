import * as motion from "motion/react-client"
import { staggerParent, staggerChildFadeUp } from "@/motion"
import BlogList from "@/components/blog/BlogList"
import { getAllPosts } from "@/lib/blog"

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <main className="flex-1 w-full bg-orange-100 font-nixie px-4 md:px-20 pb-20">
            <motion.header
                variants={staggerParent}
                initial="hidden"
                animate="visible"
                className="w-full flex flex-col items-center gap-6 md:gap-10 py-16 md:py-28 text-center"
            >
                <motion.p
                    variants={staggerChildFadeUp}
                    className="text-sm md:text-lg tracking-widest text-orange-600"
                >
                    BLOG · NOTES · REFLECTIONS
                </motion.p>
                <motion.h1
                    variants={staggerChildFadeUp}
                    className="w-full lg:w-3/4 text-3xl md:text-6xl 2xl:text-7xl font-bold leading-tight"
                >
                    5-Minute Thoughts on Hard-Won Lessons, Life&apos;s Journey,
                    and <span className="text-orange-600">Creative</span>{" "}
                    Inspiration
                </motion.h1>
                <motion.p
                    variants={staggerChildFadeUp}
                    className="w-full lg:w-2/3 text-lg md:text-2xl text-gray-700"
                >
                    A personal blog/diary for my reflection and growth
                </motion.p>
            </motion.header>

            <BlogList posts={posts} />
        </main>
    )
}
