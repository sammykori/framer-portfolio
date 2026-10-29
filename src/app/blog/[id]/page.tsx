import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import * as motion from "motion/react-client"
import { Icon } from "@iconify/react"
import { staggerParent, staggerChildFadeUp } from "@/motion"
import { formatPostDate } from "@/data/blog"
import { getAllPosts, getPost } from "@/lib/blog"
import Markdown from "@/components/blog/Markdown"
import CommentForm from "@/components/blog/CommentForm"
import Tag from "@/components/portfolio/Tag"

type Props = { params: Promise<{ id: string }> }

export const dynamicParams = false

export function generateStaticParams() {
    return getAllPosts().map((post) => ({ id: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = getPost((await params).id)
    return post
        ? { title: `${post.title} | Sammy Kori`, description: post.subtitle }
        : { title: "Not found" }
}

export default async function BlogPostPage({ params }: Props) {
    const post = getPost((await params).id)
    if (!post) notFound()

    return (
        <main className="flex-1 w-full bg-orange-100 font-nixie px-4 md:px-20 pb-20">
            <motion.article
                variants={staggerParent}
                initial="hidden"
                animate="visible"
                className="w-full max-w-4xl mx-auto flex flex-col gap-10 py-10 md:py-16"
            >
                <motion.div variants={staggerChildFadeUp}>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 hover:text-orange-600 transition-colors"
                    >
                        <Icon icon="mdi:arrow-left" /> BACK TO BLOG
                    </Link>
                </motion.div>

                <motion.header
                    variants={staggerChildFadeUp}
                    className="flex flex-col gap-4"
                >
                    <div>
                        <Tag variant="solid">{post.type.toUpperCase()}</Tag>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-bold">
                        {post.title}
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-700">
                        {post.subtitle}
                    </p>
                </motion.header>

                <motion.dl
                    variants={staggerChildFadeUp}
                    className="grid grid-cols-2 md:grid-cols-3 gap-6 border-y border-orange-600 py-6"
                >
                    <div className="col-span-2 md:col-span-1 flex items-center gap-3">
                        <div className="size-12 border border-orange-600 rounded-full relative shrink-0">
                            <Image
                                src="/img/main_img.png"
                                alt="Sammy Kori"
                                fill
                                sizes="48px"
                                style={{ objectPosition: "10% -50%" }}
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <dt className="text-xs tracking-widest text-gray-600">
                                AUTHOR
                            </dt>
                            <dd className="font-bold">Sammy Kori</dd>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <dt className="text-xs tracking-widest text-gray-600">
                            DATE
                        </dt>
                        <dd className="font-bold">
                            {formatPostDate(post.date)}
                        </dd>
                    </div>
                    <div className="flex flex-col gap-1">
                        <dt className="text-xs tracking-widest text-gray-600">
                            READ TIME
                        </dt>
                        <dd className="font-bold">{post.readTime} min</dd>
                    </div>
                </motion.dl>

                <motion.div
                    variants={staggerChildFadeUp}
                    className="w-full aspect-[3/2] border border-orange-600 p-2"
                >
                    <div className="w-full h-full bg-orange-200 relative">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            priority
                            sizes="(min-width: 896px) 896px, 100vw"
                            className="object-cover object-top"
                        />
                    </div>
                </motion.div>

                <motion.div variants={staggerChildFadeUp}>
                    <Markdown content={post.content} />
                </motion.div>

                <motion.section
                    variants={staggerChildFadeUp}
                    className="flex flex-col gap-4 border-t border-orange-600 pt-10"
                >
                    <span className="text-sm tracking-widest text-orange-600">
                        ENJOYED THE READ?
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold">
                        Share your thoughts
                    </h2>
                    <p className="text-lg text-gray-700">
                        If you found value in this post, consider sharing it
                        with others or leaving a comment below. It comes
                        straight to my inbox, and your feedback fuels my passion
                        for creating meaningful content.
                    </p>
                    <div className="flex flex-row items-center gap-6 pb-4">
                        <Link
                            href="mailto:sammykori72@gmail.com"
                            aria-label="Email"
                        >
                            <Icon
                                icon="material-icon-theme:email"
                                className="text-2xl"
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/samuelkori/"
                            aria-label="LinkedIn"
                        >
                            <Icon
                                icon="skill-icons:linkedin"
                                className="text-2xl"
                            />
                        </Link>
                    </div>
                    <CommentForm slug={post.slug} />
                </motion.section>
            </motion.article>
        </main>
    )
}
