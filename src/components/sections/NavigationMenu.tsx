"use client"
import Link from "next/link"
import { slideDown, staggerParent, staggerChildX, fade } from "@/motion"
import { motion } from "motion/react"
import { Icon } from "@iconify/react"
import { useState } from "react"

function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <motion.nav
                variants={slideDown}
                initial="hidden"
                animate="visible"
                className="flex w-full flex-row items-center justify-between px-4 md:px-20 py-10 font-nixie text-2xl bg-white"
            >
                <motion.div variants={fade} initial="hidden" animate="visible">
                    <Link href="/" className="font-bold text-nowrap">
                        SAMMY KORI
                    </Link>
                </motion.div>
                <motion.button
                    variants={fade}
                    initial="hidden"
                    animate="visible"
                    className="sm:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Icon icon="mdi:menu" className="text-3xl" />
                </motion.button>
                <motion.ul
                    variants={staggerParent}
                    initial="hidden"
                    animate="visible"
                    className="flex-row items-center gap-8 hidden sm:flex"
                >
                    <motion.li variants={staggerChildX}>
                        <Link href="/">HOME</Link>
                    </motion.li>
                    <motion.li variants={staggerChildX}>
                        <Link href="/cv">CV</Link>
                    </motion.li>
                    <motion.li variants={staggerChildX}>
                        <Link href="/blog">BLOG</Link>
                    </motion.li>
                </motion.ul>
            </motion.nav>
            {isOpen && (
                <motion.div className="inset-0 top-20 w-full bg-white h-screen flex z-50 px-4">
                    <motion.ul
                        variants={staggerParent}
                        initial="hidden"
                        animate="visible"
                        className="flex-col items-start gap-8 flex justify-start text-black text-2xl font-nixie"
                    >
                        <motion.li variants={staggerChildX}>
                            <Link href="/">HOME</Link>
                        </motion.li>
                        <motion.li variants={staggerChildX}>
                            <Link href="/cv">CV</Link>
                        </motion.li>
                        <motion.li variants={staggerChildX}>
                            <Link href="/blog">BLOG</Link>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            )}
        </>
    )
}

export default NavigationMenu
