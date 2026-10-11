"use client"
import { motion } from "motion/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Icon } from "@iconify/react"
import { staggerParent, staggerChildFadeUp } from "@/motion"
import { formatDate, type GovernanceWork } from "@/data/portfolio"
import Tag from "./Tag"

type GovernanceTableProps = {
    items: GovernanceWork[]
}

function GovernanceTable({ items }: GovernanceTableProps) {
    const router = useRouter()

    return (
        <table className="w-full text-left border-collapse">
            <thead className="hidden md:table-header-group">
                <tr className="border-b-2 border-black text-sm tracking-widest">
                    <th className="py-4 pr-6 font-bold w-1/2">
                        TITLE / DESCRIPTION
                    </th>
                    <th className="py-4 pr-6 font-bold">
                        CATEGORIES · TOOLS & FRAMEWORKS
                    </th>
                    <th className="py-4 font-bold text-right">DATE</th>
                </tr>
            </thead>
            <motion.tbody
                variants={staggerParent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {items.map((item) => {
                    const href = `/portfolio/governance/${item.slug}`
                    return (
                        <motion.tr
                            key={item.slug}
                            variants={staggerChildFadeUp}
                            onClick={() => router.push(href)}
                            className="group border-b border-orange-600/40 cursor-pointer hover:bg-orange-200/60 transition-colors flex flex-col md:table-row py-6 md:py-0"
                        >
                            <td className="md:py-6 md:pr-6 align-top">
                                <Link
                                    href={href}
                                    className="text-xl md:text-2xl font-bold group-hover:text-orange-600 transition-colors inline-flex items-center gap-2"
                                >
                                    {item.title}
                                    <Icon
                                        icon="mdi:arrow-top-right"
                                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                    />
                                </Link>
                                <p className="text-gray-700 mt-2">
                                    {item.description}
                                </p>
                            </td>
                            <td className="pt-4 md:py-6 md:pr-6 align-top">
                                <div className="flex flex-wrap gap-2">
                                    {item.categories.map((category) => (
                                        <Tag key={category} variant="solid">
                                            {category}
                                        </Tag>
                                    ))}
                                    {item.frameworks.map((framework) => (
                                        <Tag key={framework}>{framework}</Tag>
                                    ))}
                                </div>
                            </td>
                            <td className="pt-4 md:py-6 align-top md:text-right whitespace-nowrap text-gray-700">
                                {formatDate(item.date)}
                            </td>
                        </motion.tr>
                    )
                })}
            </motion.tbody>
        </table>
    )
}

export default GovernanceTable
