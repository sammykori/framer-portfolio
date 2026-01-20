'use client'
import Link from 'next/link'
import { slideDown, staggerParent, staggerChildX } from '@/motion'
import { motion } from 'motion/react'

function NavigationMenu() {
    return (
        <motion.nav
            variants={slideDown}
            initial="hidden"
            animate="visible"
            className="flex w-full flex-row items-center  justify-between px-20 py-10 font-nixie text-2xl bg-white"
        >
            <div>
                <Link href="/" className="font-bold">
                    SAMMY KORI
                </Link>
            </div>
            <motion.ul
                variants={staggerParent}
                initial="hidden"
                animate="visible"
                className="flex flex-row items-center gap-8"
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
    )
}

export default NavigationMenu
