"use client"
import { motion } from "motion/react"
import { staggerParent, staggerChildFadeUp } from "@/motion"

const stats = [
    { value: "6+", label: "years building full stack products" },
    { value: "30+", label: "production apps, APIs and dashboards shipped" },
    { value: "Now", label: "leading AI governance and responsible AI" },
]

function PortfolioHero() {
    return (
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
                FULL STACK DEVELOPER → AI GOVERNANCE LEAD
            </motion.p>
            <motion.h1
                variants={staggerChildFadeUp}
                className="w-full lg:w-3/4 text-3xl md:text-6xl 2xl:text-7xl font-bold leading-tight"
            >
                I&apos;ve built the systems. Now I help make sure AI is built{" "}
                <span className="text-orange-600">responsibly</span>.
            </motion.h1>
            <motion.p
                variants={staggerChildFadeUp}
                className="w-full lg:w-2/3 text-lg md:text-2xl text-gray-700"
            >
                Years of shipping software end to end, from databases and APIs
                to interfaces and deployments, taught me where data comes from,
                where shortcuts get taken and where things break. That&apos;s
                what I bring to AI governance: I can read a model card, question
                a data pipeline, and turn policy into controls that engineers
                will actually adopt.
            </motion.p>
            <motion.div
                variants={staggerChildFadeUp}
                className="flex flex-col sm:flex-row gap-4 pt-2"
            >
                <a
                    href="#governance"
                    className="border border-black bg-black text-orange-100 px-6 py-3 hover:bg-orange-600 hover:border-orange-600 transition-colors"
                >
                    AI GOVERNANCE WORK
                </a>
                <a
                    href="#fullstack"
                    className="border border-black px-6 py-3 hover:bg-black hover:text-orange-100 transition-colors"
                >
                    FULL STACK PROJECTS
                </a>
            </motion.div>
            <motion.ul
                variants={staggerParent}
                className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 pt-10 md:pt-16"
            >
                {stats.map((stat) => (
                    <motion.li
                        key={stat.label}
                        variants={staggerChildFadeUp}
                        className="flex flex-col items-center gap-2 border-t border-orange-600 pt-6"
                    >
                        <span className="text-4xl md:text-6xl">
                            {stat.value}
                        </span>
                        <span className="text-gray-700">{stat.label}</span>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.header>
    )
}

export default PortfolioHero
