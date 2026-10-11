"use client"
import { motion } from "motion/react"
import { slideUp } from "@/motion"

type SectionHeadingProps = {
    eyebrow: string
    title: string
    description: string
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
    return (
        <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="w-full flex flex-col gap-3 pb-10"
        >
            <span className="text-sm tracking-widest text-orange-600">
                {eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
            <p className="text-lg md:text-xl text-gray-700 lg:w-2/3">
                {description}
            </p>
        </motion.div>
    )
}

export default SectionHeading
