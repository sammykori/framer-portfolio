'use client'
import { motion, useScroll, useTransform } from 'motion/react'
import { staggerParent, staggerChildX, slideUp } from '@/motion'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Skills from '@/components/cv/Skills'
import NameLinks from '@/components/cv/NameLinks'
import Summary from '@/components/cv/Summary'
import Experience from '@/components/cv/Experience'
import Education from '@/components/cv/Education'

export default function Home() {
    return (
        <div className="flex-1 grow items-center justify-center bg-white font-nixie">
            <main className="h-full grid grid-cols-5 gap-20 w-full bg-white px-20">
                <div className="col-span-2">
                    <NameLinks />
                    <Skills />
                    <Education />
                </div>
                <div className="col-span-3">
                    <Summary />
                    <Experience />
                </div>
            </main>
        </div>
    )
}
