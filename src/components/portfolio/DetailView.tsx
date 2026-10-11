"use client"
import { motion } from "motion/react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { staggerParent, staggerChildFadeUp } from "@/motion"
import Tag from "./Tag"

type Meta = { label: string; value: string }

type DetailViewProps = {
    eyebrow: string
    title: string
    summary: string
    meta: Meta[]
    tags: { label: string; solid?: boolean }[]
    overview: string
    listTitle: string
    list: string[]
    media?: React.ReactNode
    link?: string
}

function DetailView({
    eyebrow,
    title,
    summary,
    meta,
    tags,
    overview,
    listTitle,
    list,
    media,
    link,
}: DetailViewProps) {
    return (
        <motion.article
            variants={staggerParent}
            initial="hidden"
            animate="visible"
            className="w-full max-w-4xl mx-auto flex flex-col gap-10 py-10 md:py-16"
        >
            <motion.div variants={staggerChildFadeUp}>
                <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 hover:text-orange-600 transition-colors"
                >
                    <Icon icon="mdi:arrow-left" /> BACK TO PORTFOLIO
                </Link>
            </motion.div>

            <motion.header
                variants={staggerChildFadeUp}
                className="flex flex-col gap-4"
            >
                <span className="text-sm tracking-widest text-orange-600">
                    {eyebrow}
                </span>
                <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
                <p className="text-lg md:text-2xl text-gray-700">{summary}</p>
            </motion.header>

            <motion.dl
                variants={staggerChildFadeUp}
                className="grid grid-cols-2 md:grid-cols-3 gap-6 border-y border-orange-600 py-6"
            >
                {meta.map((item) => (
                    <div key={item.label} className="flex flex-col gap-1">
                        <dt className="text-xs tracking-widest text-gray-600">
                            {item.label}
                        </dt>
                        <dd className="font-bold">{item.value}</dd>
                    </div>
                ))}
            </motion.dl>

            {media && (
                <motion.div variants={staggerChildFadeUp}>{media}</motion.div>
            )}

            <motion.div
                variants={staggerChildFadeUp}
                className="flex flex-wrap gap-2"
            >
                {tags.map((tag) => (
                    <Tag
                        key={tag.label}
                        variant={tag.solid ? "solid" : "outline"}
                    >
                        {tag.label}
                    </Tag>
                ))}
            </motion.div>

            <motion.section
                variants={staggerChildFadeUp}
                className="flex flex-col gap-4"
            >
                <h2 className="text-2xl font-bold">Overview</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                    {overview}
                </p>
            </motion.section>

            <motion.section
                variants={staggerChildFadeUp}
                className="flex flex-col gap-4"
            >
                <h2 className="text-2xl font-bold">{listTitle}</h2>
                <motion.ul variants={staggerParent} className="flex flex-col">
                    {list.map((entry) => (
                        <motion.li
                            key={entry}
                            variants={staggerChildFadeUp}
                            className="flex gap-4 items-start border-b border-orange-600/40 py-4 text-lg"
                        >
                            <Icon
                                icon="mdi:arrow-right"
                                className="text-orange-600 mt-1 shrink-0"
                            />
                            {entry}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.section>

            {link && (
                <motion.div variants={staggerChildFadeUp}>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-black bg-black text-orange-100 px-6 py-3 hover:bg-orange-600 hover:border-orange-600 transition-colors"
                    >
                        VISIT PROJECT <Icon icon="mdi:arrow-top-right" />
                    </a>
                </motion.div>
            )}
        </motion.article>
    )
}

export default DetailView
